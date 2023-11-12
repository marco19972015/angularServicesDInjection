import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/Models/User';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{
  // 7.
  selectedUser!: User;

  // 10. we now inject an instance of our UserService class
  userService = inject(USER_TOKEN);  // 13. we can now use this userService in our template

  // 8.inside this method we want to subscribe the the onUserDetailClicked event from our UserService
  ngOnInit(){
    // 9. For this we need to subscribe to that event

    // 11. we get an instance of our service and call the method OnUserDetailsClick and use subscribe method
    // Whenever the event is emitted this UserDetailComponent class will be notified about it, and that happens because 
    // we are subscribing to that event (concept of observable is being used)
    this.userService.OnUserDetailsClick.subscribe((data: User) => { // 12. pass a callback function
      console.log();
      
      this.selectedUser = data;

      console.log(this.selectedUser);
      
    }) 

  }

}
