import { Component, OnInit } from '@angular/core';
import { ApiTestService } from 'src/app/service/api-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public name : string = "Hola mundo";
  public cep: any;

  constructor(private data: ApiTestService){

  }

  ngOnInit(): void {
    this.data.Get().subscribe(result=> {
      this.cep = result;
    });
  }  
}
