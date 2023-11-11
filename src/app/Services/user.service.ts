import { User } from "src/Models/User";
import { LoggerService } from "./logger.service";
import { Injectable } from "@angular/core";


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
}