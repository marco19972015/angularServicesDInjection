import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    // Creating a single method so we can log info like an error message
    LogMessage(name: string, status: string) {
        console.log(`A new user with name ${name} with status ${status} is added to user list.`);
    }
}