// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { MainService } from '../main.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class ForpathGuard implements CanActivate {

//   constructor(private route : Router){

//   }
 
//   canActivate(){
//     if(localStorage.getItem("usertypename") != null){
//       return true;
//     }
//     else{
//       return this.route.navigate(['/']);
//     }
//     
//   }
//   
// }