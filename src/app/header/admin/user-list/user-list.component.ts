import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  // here we want to use user list class from our service
  constructor(@Inject(USER_TOKEN) private userService: UserService){}  // we inject using the contructor


  userList = this.userService.getAllUsers();


  
}
