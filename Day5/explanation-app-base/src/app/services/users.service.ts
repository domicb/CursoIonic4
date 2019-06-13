import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User;

  constructor(private http: HttpClient) {

   }
  
   public getRemoteUser(): Observable<User> {
     return this.http.get('http://localhost:3000/users/') as Observable<User>;
   }

}

