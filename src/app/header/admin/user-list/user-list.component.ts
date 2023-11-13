import { Component, Inject } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

  // here we want to use user list class from our  service
  constructor(@Inject(USER_TOKEN) private userService: UserService){}  // we inject using the contructor


  userList = this.userService.getAllUsers();


  // 4. We pass in the user details from our template and since we use the User type we need to import it 
  showUserDetail(user: User){
    // 5. we then call our method from our userService injection and pass in the user details
    // so when we pass this detial we want to emit this data that we are passing 
    this.userService.onShowUserDetails(user);
  }
}
