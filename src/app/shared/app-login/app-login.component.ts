import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { ApplicationUserVM } from 'src/app/models/ApplicationUser/application-user-vm';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { BroadcastService } from 'src/app/services/BroadcastService/broadcast.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertServiceService } from '../alert-box/alert-service.service';
import { AlertBox2Service } from '../alert-box2/alert-box2.service';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  providers: [MessageService],
})
export class AppLoginComponent implements OnInit {

  userform: FormGroup;
  message: string[];
  isValidUser: boolean;
  enableProgressBar: boolean;
  //menuModel: MenuModel[] = [];
  applicationUser: ApplicationUserVM
  userId: number;
  companyId: number;
  userName: string;
  password: string;
  displayLogIn: boolean = false;
  //msgs: Message[] = [];
  isRelogIn: number = 0
  isForgotPassword: boolean;
  recoverClicked: boolean;
  recoveryUsername: string;
  Status: string;
  tempEmail: string[] = []
  visibleMail: string = "";

  
  @Input() error: string | null;

  
  constructor(
    
    private fb: FormBuilder,
    
    private applicationUserApiService: ApplicationUserService ,
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private confirmationService: ConfirmationService,
    private router: Router,
    public dialogService: AlertBox2Service
    
    ) 
    
    { 
      this.isValidUser = true;
    }

  ngOnInit(){

    this.enableProgressBar = false;
    this.isRelogIn = 0;
    this.userform = this.fb.group({
      'username': new FormControl('', [Validators.pattern('^[a-zA-Z0-9]+$'), Validators.required]),
      'password': new FormControl('', Validators.compose([Validators.required])),
      // 'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });

  }

  getApplicationUserDetails(){

    
    //this.router.navigate(['Dashboard']);

    this.applicationUserApiService.getApplicationUserDetails(this.userName, this.password).subscribe(data => {

      if (data.isSuccess) {

       
        
        this.applicationUser = data.applicationUserVM[0];

        console.log(this.applicationUser);

        this.authService.setToken(this.applicationUser);
        
        this.broadcastService.broadcastRouterLinks(this.applicationUser.applicationPageVM, this.applicationUser.menuModel)

        setTimeout(() => {    

          this.router.navigate(['Dashboard']);
        
          this.broadcastService.startProgressBar(false);

          this.broadcastService.updateLoggedInUser(this.applicationUser);

        }, 100);

        
      } else {

        console.log("Not succeded!")

        this.broadcastService.startProgressBar(false);

        this.AlertBox();
      }
    })

    setTimeout(() => {

      this.broadcastService.startProgressBar(false);

    }, 10000);

  }

  //use for alert box 
  AlertBox() {
    var data = null;//call api
    this.dialogService.openModal("Login Failed","Invalid Username/Password Detected", ()=>{
      //confirmed
      console.log('Yes');
    }, ()=>{
      //not confirmed
      console.log('No');
    });
   
  }

}
