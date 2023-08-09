import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  username : any;

  usernametype : any;

  constructor(private route : Router){

  }
  
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.usernametype = localStorage.getItem("usertypename");
  }
  
 


  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
  }
}