import { Injectable } from '@angular/core';
import { ApplicationUserVM } from 'src/app/models/ApplicationUser/application-user-vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public time: Date = new Date();
  tokenExpireTime : string;


  constructor() { }

  setToken(applicationUser: ApplicationUserVM) {
    // //console.log(applicationUser);
    localStorage.setItem("UserId", applicationUser.userID.toString());
    localStorage.setItem("isLoggedIn", "Valid");
    localStorage.setItem("UserName", applicationUser.username);
    localStorage.setItem("UserRole", applicationUser.roleId.toString());
    localStorage.setItem("UserAddress", applicationUser.address);
    localStorage.setItem("UserEmail", applicationUser.email);
    localStorage.setItem("UserMobile", applicationUser.mobileNo.toString());
    localStorage.setItem("CompanyId", applicationUser.companyId.toString());
    localStorage.setItem("BranchId", applicationUser.branchID.toString());
    localStorage.setItem("Token", applicationUser.token.toString());
  }
  getToken() {
    const jwtTokn = localStorage.getItem("Token");
    if (jwtTokn) {
      return jwtTokn
    } else {
      return null
    }
  }

  removeToken() {


    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    localStorage.clear();

    
  }

  getTokenExpireTime ()
  {
       return this.getTokenExpireTime;
  }
  validateToken() {
    // const helper = new JwtHelperService();
    // let validLogIn = false;
    // const jwtTokn = this.getToken();
    // const decoded = jwt_decode(jwtTokn);

    // const isLoggedIn = localStorage.getItem("isLoggedIn");

    // const expirationDate = helper.getTokenExpirationDate(jwtTokn);
    // const  a = helper.decodeToken(jwtTokn);

    // this.tokenExpireTime = expirationDate.toDateString();

    // if (isLoggedIn === "Valid") {
    //   validLogIn = true;
    // } else {
    //   validLogIn = false;
    // }


    // if (validLogIn ) {
    //   return true
    // } else {
    //   return false
    // }

  }
}
