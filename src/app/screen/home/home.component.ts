import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ApiTestService } from 'src/app/service/api-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public name : string = "Hola mundo";
  public cep: any;
  public post: Post = new Post();

  constructor(private data: ApiTestService){

  }

  PostData(param : Post){
    this.data.Post(param).subscribe(success => {
      console.log(success);
      this.post = success
    },
    error => {
      alert("Error");
    });
  }

  ngOnInit(): void {
    this.data.Get().subscribe(result=> {
      this.post = result;
    });
  }  
}
