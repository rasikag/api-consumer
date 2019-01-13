import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';


@Injectable()
export class UserService {

  baseURL = 'https://jsonplaceholder.typicode.com/';
  getAllUsers = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsers)
      .pipe(delay(5000));
  }
}
