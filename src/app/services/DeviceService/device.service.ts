import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base.service';
import { CommonService } from '../CommonServices/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  token: string;

  constructor(
    private http: HttpClient,
    private baseService: BaseService,
    
    private commonService: CommonService
  ) { }

  setUrl(urlPath: string) {
    return this.baseService.getBaseUrl() + urlPath;
  }

  getPath() {
    return this.baseService.getBaseUrl();
  }

  getToken(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let req = "grant_type=client_credentials&client_id=CCB1-PS-19-00000025&client_secret=IhPk%2FahiVOGMKAef%2B5aTig%3D%3D";
    // let req = "grant_type=client_credentials&client_id=CCB1-PS-19-00000108&client_secret=eUhx9nieWo2fJAmOMkxrhg%3D%3D";
    return this.http.post<any>(localStorage.getItem("posTokenUrl"), req, httpOptions)
  }
}
