import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { CommonService } from './CommonServices/common.service';
import { Observable } from 'rxjs';
import { ApplicationUserResponce } from '../models/ApplicationUser/application-user-responce';
import { MenuResponce } from '../models/ApplicationMenu/menu-responce';
import { HttpClient, HttpBackend } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/src/client';
// import { HttpBackend } from '@angular/common/http/src/backend'



@Injectable({
  providedIn: 'root'
})
export class ApplicationUserService {

  private httpClient: HttpClient;

    constructor(private http: HttpClient, 

    private baseservice: BaseService, 

    handler: HttpBackend, 
    
    private commonService: CommonService) 
    {
      this.httpClient = new HttpClient(handler);
    }

  setUrl(urlPath: string) {

    return this.baseservice.getBaseUrl() + urlPath;

  }

  //LOGIN
  getApplicationUserDetails(userName: string, password: string):Observable<ApplicationUserResponce> {
     
    console.log(`${this.setUrl('Auth/Login')}/${userName},${password}`);

    return this.http.get<ApplicationUserResponce>(`${this.setUrl('Auth/Login')}/${userName},${password}`);
  }

  //LOGOUT
  userLogOut(userId: number): Observable<ApplicationUserResponce> {
    return this.http.put<ApplicationUserResponce>(
      `${this.setUrl('ApplicationUser/UserLogOut ')}`, userId);
  }

  getRefreshToken(userName: string, password: string): Observable<ApplicationUserResponce> {
    
    return this.httpClient.get<ApplicationUserResponce>(`${this.setUrl('Auth/GetRefreshToken')}/${userName},${password}`);
  }


  checkUserPermissions(userRole: number, module: number, action: number): Observable<boolean> 
  {
    return new Observable(Observable => {
      this.http.get<MenuResponce>(`${this.setUrl("Menu/CheckUserRolePermission")}/${userRole},${module},${action}`)
        .subscribe(res => {
          if (res.isSuccess) {
            res.allow ? {} : this.commonService.showWarnningMessage("Sorry You Do not have permission perform that action")
            Observable.next(res.allow);
            Observable.complete();
          } else {
            this.commonService.showErrorMessage(res.message)
          }
        });
    })
  }
}


