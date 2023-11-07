// In order to use the User class we need to import it (our structure)
import { User } from "src/Models/User";

export class UserService {
    // create a prop of type User class (our model)
    users: User[] = [
        // instanciate new instances of users (hard coded)
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
    ];

    // Create a method that gets all the users
    getAllUsers() {
        return this.users;
    }

    // Create a method that creates a user
    CreateUser(name: string, gender: string, subType: string, status: string){
        // line 21 returns us a new user with these values
        let user = new User(name, gender, subType, status);
        // Using the push method we can add the user array to our users array
        this.users.push(user);
    }
}