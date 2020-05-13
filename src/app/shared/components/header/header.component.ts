import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BroadcastService } from 'src/app/services/BroadcastService/broadcast.service';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  loggedInuserName: string;
  loggedInUserId: number;
  expireTime: Date;

  @Output() toggleSideBarForMe : EventEmitter<any>  = new  EventEmitter()

  toggleSideBar()
  {
    this.toggleSideBarForMe.emit();
  }

  
  constructor(
    private broadcastService: BroadcastService,
    //private notificationService: NotificationService,
    private applicationUserApiService: ApplicationUserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){

  

    this.loggedInuserName = localStorage.getItem("UserName");
    this.loggedInUserId = parseInt(localStorage.getItem("UserId"));

    this.getTokenExpireTime();

  }

  getTokenExpireTime() 
  {

    const jwtTokn = localStorage.getItem("Token");
    const helper = new JwtHelperService();
    this.expireTime = helper.getTokenExpirationDate(jwtTokn);
  }

  logOut() 
  {

    this.broadcastService.activateApplicationMenu(false);

    localStorage.removeItem("isLoggedIn")

    localStorage.setItem("isLoggedIn", "Invalid");

    localStorage.clear();

    //this.notificationList = [];

    this.userLogOut();

    this.broadcastService.logOut();

    
  }

  userLogOut() {
    


    this.applicationUserApiService.userLogOut(this.loggedInUserId).subscribe(data => {

      if (data.isSuccess) 
      {
        this.authService.removeToken();
      }
    })
  }

 
}
