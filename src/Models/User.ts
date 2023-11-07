// Think of this as the structure for how we want our User array objects to look
export class User{
    // Constructor to be able to create new users
    constructor(name: string, gender: string, subType: string, status:string){
        // inside we can assign the properties that will be coming in from the constructor
        // to the props below the constructor
        this.name = name;
        this.gender = gender;
        this.subType = subType;
        this.status = status;
    }

    name: string;
    gender: string;
    subType: string;
    status: string;
}
