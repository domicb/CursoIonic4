import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly usersEndpoint = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {

  }

  getUser(): Observable<User> {

    return this.http.get(`${this.usersEndpoint}/1`) as Observable<User>;
  }

  updateUser(user: User): Observable<User> {

    return this.http.put(`${this.usersEndpoint}/1`, user) as Observable<User>;
  }
}
