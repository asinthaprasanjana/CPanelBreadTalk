import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { BroadcastService } from 'src/app/services/BroadcastService/broadcast.service';
import { BaseService } from 'src/app/services/base.service';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/CommonServices/common.service';
import { MessageService, Message } from 'primeng/api';
import { DeviceService } from 'src/app/services/DeviceService/device.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
  
})
export class DefaultComponent implements OnInit {

  isLoggedIn: boolean;
  isForgotPassword: boolean;

  sideBarOpen = false;

  //////////////////////////

  title = 'Onimta Control Panel';

  display: boolean;
  displayLogIn: boolean = false;
  loggedInUser: any;
  userId: number;
  message: string[];
  expaded: boolean = false;
  notification = {} as Notification
  isLoadinData: boolean;
  //loadingMessage: Message[] = [];
  //customNotification = {} as Message;
  userIdList: string[] = [];
  userRoleList: string[] = [];
  loggedInUserId: string;
  userRoleId: number;
  timer;
  isNotificationServerConnected: boolean;
  displayUserReview: boolean;
  reviewText: string;
  //userCommentRequest = {} as UserCommentRequest;
  //userCommentVm = {} as UserCommentVM;
  loadingMessage: Message[] = [];
  public _hubConnection: HubConnection;
  //msgs: Message[] = [];
  progressBarValue: string
  isProgressBarAvailable: boolean;

  approvalNotificationGroupId: number = 1;

  loggedInUserName: string;
  isErrorProgressBarAvailable: boolean = false;
  waitingMsgDisplayed: boolean;

  @Output() toggleSideBarForMe : EventEmitter<any>  = new  EventEmitter()

  constructor(
    private broadcastService: BroadcastService,
    private baseService: BaseService,
    private applicationUserApiService: ApplicationUserService,
    private authService: AuthService,
    private messageService: MessageService,
    //private _hotkeysService: HotkeysService,
    private commonService: CommonService,
    private router: Router,   
    private device: DeviceService
    
  ) { }

  ngOnInit():void{
    
    this.device.getToken().subscribe(res=>{
      //console.log(res);
      
    })

    this.loggedInUserName = localStorage.getItem("UserName");
    //this.invoiceService.getUrl();

    //this.showWelcome();
    this.refreshToken();

    this.checkUserIsActive();

    this.userLogInControl(); 

    this.catchIsForgot();

    this.catchReviewComponentVisibilityStatus();

    this.isNotificationServerConnected = false;

    this.broadcastService.isUserLoggedIn.subscribe(data => 
      {
      this.isLoggedIn = data;
      const loggedInStatus = localStorage.getItem("isLoggedIn");
      this.userId = parseInt(localStorage.getItem("UserId"));

      if (loggedInStatus === "Valid") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })

    if (this.isNotificationServerConnected) {

    } else {
      this.timer = setInterval(() => {
        //  this.broadcastNotification();
      }, 5000);
    }

    //this.broadcastNotification();
    this.getLoggedinUser();
    this.LoadingData();
    this.LoadingProgressBar();


    console.log(this.loggedInUserName);
    console.log(this.isLoggedIn);

    //this.isLoggedIn = true;
    //this.isForgotPassword = false;
        
  }

  

  sideBarToggler()
  {
    this.sideBarOpen = !this.sideBarOpen;
  }

  toggleSideBar()
  {
    this.toggleSideBarForMe.emit();
  }

  userLogInControl() {
    this._hubConnection = new HubConnectionBuilder().withUrl(this.baseService.getNotificationBaseUrl()).build();
    this._hubConnection
      .start()
      .then(() => {

        this.isNotificationServerConnected = true;
        //console.log("user login controling connected")
        clearInterval(this.timer);
      })
      .catch(err => {

        this.isNotificationServerConnected = false;

      });

    this._hubConnection.on('UserLogInControl', (msg: MessageVM) => {

      if (msg.userId === this.userId) {
        this.broadcastService.logOut();
        this.applicationUserApiService.userLogOut(this.userId).subscribe(data => {
        })
      }
    })
  }

  checkUserIsActive() {
    document.onmousemove = (function () {
      var onmousestop = function () {

        setTimeout(() => {
          this.displayLogIn = true;

          //  //console.log("user is inactive");
          setTimeout(() => {
          }, 4000);

        }, 6000);
      }, thread;

      return function () {
        clearTimeout(thread);
        // //console.log("user is active");

        thread = setTimeout(onmousestop, 500);
      };
    })();
  }

  catchIsForgot() {
    this.isForgotPassword = this.broadcastService.isforgotpassword;
    this.broadcastService.IsForgotPassword.subscribe(data => {
      this.isForgotPassword = data;
    });
  }

  catchReviewComponentVisibilityStatus() {
    this.broadcastService.ShowUserReviewComponentStatus.subscribe(data => {
      this.displayUserReview = data;
    });
  }

  getLoggedinUser() {
    this.broadcastService.LoggedInUser.subscribe(data => {
      if (data) {
        this.loggedInUser = data;
        this.loggedInUserId = data.userID.toString();
        this.userRoleId = data.roleId;
        this.isLoggedIn = true;
      }
    })
  }
  LoadingData() {
    this.broadcastService.isDataLoading.subscribe(data => {
      this.isLoadinData = data;
      if (this.isLoadinData) {
        this.loadingMessage.push({ severity: 'warn', summary: '', detail: 'Loading Data ...' });
      } else {
        this.loadingMessage = [];
      }
    })

  }

  LoadingProgressBar() {

    this.broadcastService.progressBarAvailable.subscribe(data => {
      this.isProgressBarAvailable = data;

      if (this.isProgressBarAvailable) {

        this.progressBarValue = 'indeterminate';
      } else {
        this.progressBarValue = 'determinate'
      }




    })



    this.broadcastService.errorProgressBarAvailable.subscribe(data => {
      this.isErrorProgressBarAvailable = data;
      if (this.isErrorProgressBarAvailable) {

        setTimeout(() => {
          this.isErrorProgressBarAvailable = false;
        }, 3500);

        this.progressBarValue = 'indeterminate';
      } else {
        this.progressBarValue = 'determinate'
      }
    })

  }

  refreshToken() {
    setTimeout(() => {
      // this.displayLogIn = true;
    }, 5000);
  }
}

export interface MessageVM {
  type: string;
  header: string;
  payload: string;
  userId: number;
  notificationGroupId: number
  broadCastAll: boolean;
  broadCastSpecificRole: boolean;
  broadCastSpecificUserList: boolean;
  userRoleList: string;
  userIdList: string;
}
