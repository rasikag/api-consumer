import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  users: User[];
  dataSource = null;
  isLoading = true;
  displayedColumns: string[] = ['id', 'email', 'name', 'phone'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers(0, 3);
  }

  getUsers(start: number, limit: number): void {
    this.userService.getUsers(start, limit)
      .subscribe((users) => {
        this.isLoading = false;
        this.dataSource = users;
      },
        error => this.isLoading = false
      );
  }

}
