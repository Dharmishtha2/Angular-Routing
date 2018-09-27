import { promise } from "../../node_modules/protractor";
import { resolve } from "path";
import { reject } from "../../node_modules/@types/q";

export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        //const promise = new promise(
         //   (resolve, reject) => 
        //)
    }
    login() {
        this.loggedIn=true;
    }
    logOut() {
        this.loggedIn=false;
    }
}