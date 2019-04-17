import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {




  user;
  userId;
  isLoadingResults = true;
  showEditDetail = false;
  userForm: FormGroup = this.fb.group({
      first_name: [''],
      last_name: ['']
    });

  id: number = null;
  first_name: string = '';
  last_name:string='';

  constructor(private route: ActivatedRoute, private router: Router, private srv: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.getUserDetail(this.userId);
  }

  getUserDetail(id) {
    this.srv.getUser(id).subscribe((res) => {
      this.id = res.data.id;
      this.userForm.setValue({
        first_name: res.data.first_name,
        last_name: res.data.last_name
      });
      this.user = res.data;
      console.log(res);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onFormSubmit(form) {

    //this.router.navigate(['/'], {queryParams: {id: this.userId,  first_name:form.first_name, last_name: form.last_name} });

    this.user['first_name'] = form.first_name;
    this.user['last_name'] = form.last_name;
    console.log(this.userForm);
    console.log('You have to Update');
    this.showEditDetail = true;
  }
}
