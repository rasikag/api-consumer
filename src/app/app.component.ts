import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];
  title = 'api-consumer';

  constructor(private userService: UserService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
   this.userService.getUsers(0, 10)
    .subscribe((users) => { this.users = users ; console.log (this.users); });
  }
}
