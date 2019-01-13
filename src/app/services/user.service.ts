import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class UserService {

  // http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10

  baseURL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers (start: number, limit: number): Observable<User[]> {
    const getAllUsers = `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`;
    return this.http.get<User[]>(getAllUsers)
      .pipe(delay(5000));
  }
}
