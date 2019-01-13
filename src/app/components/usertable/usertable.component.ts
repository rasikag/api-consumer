import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users) => {
        this.isLoading = false;
        this.dataSource = users;
      },
        error => this.isLoading = false
      );
  }

}
