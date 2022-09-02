import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from './user.model';
import { ApiService } from 'src/app/core/api/api.service';
import { ApiListModel } from 'src/app/core/api/api.model';

@Component({
  selector: 'page-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm!: FormGroup;
  posts: ApiListModel = new ApiListModel();


  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    public apiService: ApiService
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        console.log(data);
        this.createForm(this.user.name);
        this.listar();
        console.log(this.posts.id);
      }
    })
  }

  createForm(name: string) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value: { name: any; }){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res: any) => {
      this.location.back();
    }, (error: any) => {
      console.log("Logout error", error);
    });
  }

  listar(){
    this.apiService.listar()
    .then(dados => this.posts = dados)
    console.log(this.posts)
  }
}
