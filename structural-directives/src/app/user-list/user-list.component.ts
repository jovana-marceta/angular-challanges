import { Component } from '@angular/core';
import { User } from '../user';
import { USERS } from '../user-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = USERS;

  showOlderUsers = false;

  toggleOlderUsers() {
    this.showOlderUsers = !this.showOlderUsers;
  }
}
