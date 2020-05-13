import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { PosLocationVM } from 'src/app/models/PosLocation/pos-location-vm';
import { Observable } from 'rxjs';
import { PosLocationResponceVM } from 'src/app/models/PosLocation/pos-location-responce-vm';

@Injectable({
  providedIn: 'root'
})
export class PosLocationService {

  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) { }

  setUrl(urlPath: string) {
    return this.baseService.getBaseUrl() + urlPath;
  }

  getPath() {
    return this.baseService.getBaseUrl();
  }

  
  getAllPosLocations(): Observable<PosLocationResponceVM> {
    return this.http.get<PosLocationResponceVM>(`${this.setUrl('PosLocation/GetAllPosLocations')}`);
  }

  
}
