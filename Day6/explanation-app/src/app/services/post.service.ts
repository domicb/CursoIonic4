import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }

 
  public getRemoteUser() {
    return this.http.get('http://localhost:3000/posts/')
    .pipe(() => {
      //return item.filter();
    });
  }
}
