import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user;
  img;
  showTable = false;
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private srv: ApiService) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.srv.getUser(id).subscribe((res) => {
      this.user = res.data;
      this.img = res.data.avatar;
      console.log(res);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    this.showTable = true;
  }

}
