import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData;
  showUserData =  false;
  users = [];
  page = 1;
  totalPages;
  userToEdit;
  isLoadingResults = true;
  showP =  true;
  constructor(private srv: ApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getAllUsers();
  }

  pageChange(page) {
    this.isLoadingResults = true;
    this.srv.getUserPage(page).subscribe( (res) => {
      this.users = res.data;
      this.isLoadingResults = false;
      console.log(this.users);
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }


  getAllUsers() {

    this.srv.getUsers().subscribe( (res) => {
      console.log(res);
      this.page = res.page;
      this.totalPages = res.total_pages;
      this.users = res.data;
      this.isLoadingResults = false;
      console.log(this.users);
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  deleteUser(id) {
    this.users.forEach( (item, index) => {
      if (item.id === id) {
        this.users.splice(index,1);
      }
    });
  }

  pagePrevNext() {

    if (this.showP) {
      this.showP = false;
    } else {
      this.showP = true;
    }
  }

}
