import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {
  constructor(private http: HttpClient) { }

  public Get(): Observable<any>{
    return this.http.get("https://viacep.com.br/ws/01001000/json/");
  }
}
