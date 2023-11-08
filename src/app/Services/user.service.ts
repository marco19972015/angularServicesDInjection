import { User } from "src/Models/User";
import { LoggerService } from "./logger.service";
import { Injectable } from "@angular/core";

// 2. also need to tell angular WHAT to inject. We use decorators to tell angular to do somethig 
// 3. Here we will use the @Injectable decorator, this @Injectable tells angular something can be injected in the service class
// we use the Injectable decorator where we want to inject a service
// 4. We then need to provide this service in the module class providers array so we have the same instance in all the components.
@Injectable()
export class UserService {
    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
    ];

    //1. we need to TELL angular how to inject the logger service
    constructor(private logger: LoggerService){}

    getAllUsers() { return this.users; }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);

        // let looger = new LoggerService(); // this is tightly coupled
        this.logger.LogMessage(name, status)
    }
}