import { User } from "src/Models/User";
import { LoggerService } from "./logger.service";
import { EventEmitter, Injectable } from "@angular/core";


@Injectable()
export class UserService {
    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
    ];

    constructor(private logger: LoggerService){}

    getAllUsers() { return this.users; }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);

        // let looger = new LoggerService(); // this is tightly coupled
        this.logger.LogMessage(name, status)
    }

    // 1. Create an event of type user
    OnUserDetailsClick: EventEmitter<User> = new EventEmitter<User>();

    // 2. We now emit that event using onShowUserDetails method
    onShowUserDetails(user: User){
        // 3. we want to emit this event whenever a user clicks on + button
        this.OnUserDetailsClick.emit(user);  // 6. we pass in the data from where we want to emit the data
    }
}