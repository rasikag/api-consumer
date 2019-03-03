import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { MatPaginator } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements AfterViewInit {

  users: User[];
  dataSource = null;
  isLoading = true;
  displayedColumns: string[] = ['id', 'email', 'name', 'phone'];
  resultsLength = 10;
  start = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.userService.getUsers(this.start, 4);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoading = false;
          return data;
        }),
        catchError(() => {
          this.isLoading = false;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource = data;
        if (this.start === 0) {
          this.start = this.paginator.pageIndex + 2;
        } else {
          this.start = this.paginator.pageIndex + 1;
        }
      });
  }

}
