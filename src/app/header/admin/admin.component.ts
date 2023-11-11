import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  // In this component we will be adding the new users

  constructor(@Inject(USER_TOKEN) private userService: UserService){}

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  createNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status)
  }
}
