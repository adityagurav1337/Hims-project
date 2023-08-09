import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './master/header/header.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",loadChildren:()=>import('./login/login.component').then(
    m=>m.LoginComponent 
  )},

  // {path:"states",loadChildren:()=>import("./app.component").then(
  //   m=>m.AppComponent 
  // )},
 {path:"login",component:LoginComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
