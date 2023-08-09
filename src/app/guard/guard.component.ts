import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ForpathGuard implements CanActivate {

  constructor(private route : Router){

  }
 
  canActivate(){
    if(localStorage.getItem("usertypename") != null){
      return true;
    }
    else{
      return this.route.navigate(['/']);
    }
    
  }
  
}