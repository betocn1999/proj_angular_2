import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {
  constructor(private http: HttpClient) { }

  public Get(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts/");
  }

  public Post(param: Post): Observable<Post>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts", param);
  }
}
