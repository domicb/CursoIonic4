import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getStaticUser(): User {

    return {
      name: 'Posti',
      birthDate: '1985-05-10',
      sex: 'male',
      phone: 2324,
      email: 'japostigo@atsistemas.com'
    };
  }

  getRemoteUser(): Observable<User> {

    return this.http.get('http://localhost:3000/users/1') as Observable<User>;
  }
}
