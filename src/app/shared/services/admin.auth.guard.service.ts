import { ProviderAst } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({providedIn: "root"})
export class AdminAuthGuardSrvice implements CanActivate{
  constructor (private _authService: AuthService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._authService.userValue && this._authService.userValue.profiles.includes('ADMIN')){
      return true
    }else {
      this.router.navigate(['login'])
      return false
    }
  }


}

