import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  getBaseUrl() {
    return environment.apiUrl
    // return localStorage.getItem("baseUrl")
  }

  getNotificationBaseUrl() {
    return environment.notificationUrl
  }

  // getPrintBaseUrl() {
  //   return environment.printUrl
  // }

}
