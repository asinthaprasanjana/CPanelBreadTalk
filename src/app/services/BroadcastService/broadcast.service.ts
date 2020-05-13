import { Injectable } from '@angular/core';
import { ApplicationUserVM } from 'src/app/models/ApplicationUser/application-user-vm';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../AuthService/auth.service';
import { ApplicationPageVM } from 'src/app/models/ApplicationPage/application-page-vm';
import { MenuModel } from 'src/app/models/ApplicationMenu/menu-vm';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  list: string[];
  valid: boolean;
  isforgotpassword: boolean;
  recievedPageOpen: boolean;
  showUserReviewComponent: boolean;
  BillingPageOpen: boolean;
  loggedInUser: ApplicationUserVM;
  userId: number;
 
  notification: Notification[] = []
  newNotification = {} as Notification;
  
  applicationPageVM: ApplicationPageVM[] = [];
  menuVm: MenuModel[] = [];
  

  private messageSource = new BehaviorSubject(this.list);
  private notificationSource = new BehaviorSubject(false);
  private isRecievedPageOpen = new BehaviorSubject(false);
  private ShowUserReviewComponent = new BehaviorSubject(false);
 
  private isBillingPageOpen = new BehaviorSubject(false);
 
  private isLoadingData = new BehaviorSubject(false);
  private isForgotPassword = new BehaviorSubject(this.isforgotpassword);
  private isprogressBarAvailable = new BehaviorSubject(false);
  private isErrorprogressBarAvailable = new BehaviorSubject(false);

  private loggedinUser = new BehaviorSubject(this.loggedInUser);
  private isUserLogged = new BehaviorSubject(false);
 
  private isMenuEnable = new BehaviorSubject(this.valid);
  private newnotification = new BehaviorSubject(this.newNotification)
 
  private receiveTypeId = new BehaviorSubject(0);
  private qcAvailable = new BehaviorSubject(false);
  private bspPayementType = new BehaviorSubject(0);
  private auditDetails = new BehaviorSubject(null);

  private routerLinksList = new BehaviorSubject(this.applicationPageVM);
  private menuModelList = new BehaviorSubject(this.menuVm);





  newnotifications = this.newnotification.asObservable();
  
  newNotificationsAvailable = this.notificationSource.asObservable();
  recievedClosed = this.isRecievedPageOpen.asObservable();
  ShowUserReviewComponentStatus = this.ShowUserReviewComponent.asObservable();
  billingClosed = this.isBillingPageOpen.asObservable();
  isDataLoading = this.isLoadingData.asObservable();
  progressBarAvailable = this.isprogressBarAvailable.asObservable();
  errorProgressBarAvailable = this.isErrorprogressBarAvailable.asObservable();
  
  LoggedInUser = this.loggedinUser.asObservable();
  isUserLoggedIn = this.isUserLogged.asObservable();
  IsForgotPassword = this.isForgotPassword.asObservable();
  //routerLinks = this.routerLinksList.asObservable();
  //menus = this.menuModelList.asObservable();
  recieveType = this.receiveTypeId.asObservable();
  qcavailble = this.qcAvailable.asObservable();
  bspPayementTypeId = this.bspPayementType.asObservable();
  auditVm = this.auditDetails.asObservable();

  routerLinks = this.routerLinksList.asObservable();
  menus = this.menuModelList.asObservable();

  constructor(
    private authService: AuthService) {
  }

  changeMessage(message: string[]) {
    this.messageSource.next(message);
  }

  logOut() {
    this.loggedinUser.next(null);
    this.isUserLogged.next(false);
    localStorage.removeItem("isLoggedIn")
    localStorage.setItem("isLoggedIn", "Invalid");
    localStorage.clear();
    this.activateApplicationMenu(false);
    this.userId = -1;
    this.authService.removeToken();

  }

  updateLoggedInUser(applicationUser: ApplicationUserVM) {
    this.loggedinUser.next(applicationUser);
    this.isUserLogged.next(true);
    this.userId = applicationUser.userID;
  }

  loadingData(isLoadingData: boolean) {
    this.isLoadingData.next(isLoadingData);
  }
  updateNotification(notification: Notification) {
    this.notificationSource.next(true);
    this.newnotification.next(notification);
  }

  startProgressBar(isAvaialble: boolean) {
    this.isprogressBarAvailable.next(isAvaialble);
  }

  startErrorProgressBar() {
    this.isErrorprogressBarAvailable.next(true);

   
  }

  // getFunctionApprovalDetails() {

  //   this.approvalService.getAllFunctionApprovalDetails().subscribe(data => {
  //     if (data.isSuccess) {
  //       this.functionApprovalTypeVm = data.functionApprovalTypeVm;
  //     }
  //   });
  // }
 


  updateRecievedPageDetails(showing: boolean) {
    this.isRecievedPageOpen.next(showing);
  }

  updateUserReviewComponentVisibilityStatus(showing: boolean) {
    this.ShowUserReviewComponent.next(showing);
  }
 
  updateBillingPageDetails(showing: boolean) {
    this.isBillingPageOpen.next(showing);
  }
  


  activateApplicationMenu(isActive: boolean) {
    this.isMenuEnable.next(isActive);
  }

  showPasswordRecoveryPage(isForgot: boolean) {
    this.isForgotPassword.next(isForgot);
  }

  broadCastRecieveTypeId(receiveTypeId : number){
  this.receiveTypeId.next(receiveTypeId);
  }

  broadcastQcDetails(qcAvailble :boolean){
           this.qcAvailable.next(qcAvailble);
  }

  broadCastBspPayementType(bspPayementType : number) {
           this.bspPayementType.next(bspPayementType);
  }

  broadcastRouterLinks(applicationPageVm: ApplicationPageVM[], menuModel: MenuModel[]) 
  {
    this.routerLinksList.next(applicationPageVm);
    this.menuModelList.next(menuModel);
  }

  // broadCastAuditDetails(AuditVm:AuditVM)
  // {
  //  this.auditDetails.next(AuditVm)
  // }

 

}

export interface Notification {
  header: string;
  details: string;
  referenceNo: string;
  url: string;

}



