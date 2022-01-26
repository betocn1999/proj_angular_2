import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { ApiTestService } from 'src/app/service/api-test.service';

@Component({
  selector: 'app-reative-form-page',
  templateUrl: './reative-form-page.component.html',
  styleUrls: ['./reative-form-page.component.css']
})
export class ReativeFormPageComponent implements OnInit {

  postForm: FormGroup = {} as FormGroup
  post?:Post;
  constructor(
    private formBuilder: FormBuilder,
    private apiTestService: ApiTestService,
    private toastrService: ToastrService,
    ) {

      this.createForm(new Post());
    }

  ngOnInit(): void {
  }

  createForm(post: Post){
    this.postForm =  this.formBuilder.group({
      title:[post.title,[Validators.required]],
      body:[post.body,[Validators.required]],
      userId:[post.userId,[Validators.required]],
    })
  }

  createPost(){
    this.post = this.postForm.value as Post;
    this.apiTestService.Post(this.post)
    .subscribe({
      next:success => {
        this.post=success;
        this.toastrService.success(`<b>POST CREATED</b> :<br />
        <b>Title</b> ${this.post.title} <br />
        <b>Body</b> ${this.post.body}  <br />
        <b>User Id</b> ${this.post.userId}`,'success',{ enableHtml:true})
        console.log(success);
      },
      error: error => {
        console.log(error);
        alert("Error");
      }
    });
  }

}
