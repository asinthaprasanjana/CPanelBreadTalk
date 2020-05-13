import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { DashboardResponceVM } from '../models/dashboard-responce-vm';

@Injectable({
  providedIn: 'root'
})
export class DashboardGraphsServiceServiceService {
 



  constructor
  ( 
    private http: HttpClient,
    private baseService: BaseService
  ) { }

  setUrl(urlPath: string) {
    return this.baseService.getBaseUrl() + urlPath;
  }

  getPath() {
    return this.baseService.getBaseUrl();
  }

  GetTotalSale() 
  {
    return this.http.get<DashboardResponceVM>(`${this.setUrl('JewelleryNewDashboard/GetTotalSaleAmount')}`);
  }

  GetTotalDiscount() 
  {
    return this.http.get<DashboardResponceVM>(`${this.setUrl('JewelleryNewDashboard/GetTotalDiscount')}`);
  }
  
  GetTotalBillCount() 
  {
    return this.http.get<DashboardResponceVM>(`${this.setUrl('JewelleryNewDashboard/GetTotalBillCount')}`);
  }

}
