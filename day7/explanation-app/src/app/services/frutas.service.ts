import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  constructor(private http: HttpClient) { }

  
  public getFruits() {

    return this.http.get('http://localhost:3000/fruits');
  }
}
