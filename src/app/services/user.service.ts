import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  baseURL = 'https://jsonplaceholder.typicode.com/';
  getAllUsers = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsers);
  }
}
