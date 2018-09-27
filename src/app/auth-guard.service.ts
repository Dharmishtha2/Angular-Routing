import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "../../node_modules/rxjs";
import { promise } from "../../node_modules/protractor";

export class AuthGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
                        return true;
                }
}