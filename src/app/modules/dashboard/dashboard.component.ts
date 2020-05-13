import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardGraphsTesingServiceService } from '../dashboard-graphs-tesing-service.service';
import { DashboardGraphsServiceServiceService } from 'src/app/services/dashboard-graphs-service-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  //mat card related 
  card01 = []; card02 = []; card03 = []; card04 = [];
  TotalSaleCard01 : number = 0;
  TotalBillCountCard02 : number = 0;
  TotalDiscountCard03  : number = 0;
  TotalCancellationCard04 : number = 0;
  TotalSale_Card01: number[] = []; 
  TotalBillCount_Card02 : number[] = []; 
  TotalDiscount_Card03 : number[] = []; 
  TotalCancellation_Card04 : number[] = []; 
  
  //date range and date picker related initializations
  //range: Range = { fromDate: null, toDate: null };
  dateRange = new FormControl();

  constructor
  (
    private dashboardService_test:DashboardGraphsTesingServiceService//testing service class
    // private dashboardService: DashboardGraphsServiceServiceService // real service class
    
  ) { }

  ngOnInit(){

    //mat card related Initialization
    this.card01 = this.dashboardService_test.card01();
    this.card02 = this.dashboardService_test.card02();
    this.card03 = this.dashboardService_test.card03();
    this.card04 = this.dashboardService_test.card04();

    // MAT CARDS : commented untill the API is done /////////////
    //this.TotalSaleAmount();
    //this.TotalBillCount();
    //this.TotalDiscountAmount();
    //this. TotalCancellationAmount();
    /////////////////////////////////////////////////

  }

  //mat card realted methods 

  // TotalSaleAmount()
  // {   

  //   this.TotalSaleCard01 = 0;
  //   this.TotalSale_Card01 = [];

  //     this.dashboardService.GetTotalSale().subscribe(response =>    
  //     {   
  //       response.totalSaleData.forEach(cate=>
  //       {
  //         this.TotalSaleCard01 = this.TotalSaleCard01 + cate.totalSaleAmountCard01;
          
  //         this.TotalSale_Card01.push(this.TotalSaleCard01);
          
  //       }) 

  //         //console.log( this.TotalSale_Card01[0])
         
  //     })
  // }

  // TotalBillCount()
  // {   

  //   this.TotalBillCountCard02 = 0;
  //   this.TotalBillCount_Card02 = [];

  //     this.dashboardService.GetTotalBillCount().subscribe(response =>    
  //     {   
  //       response.totalBillCountData.forEach(cate=>
  //       {
  //         this.TotalBillCountCard02 = this.TotalBillCountCard02 + cate.totalBillCountCard02;
          
  //         this.TotalBillCount_Card02.push(this.TotalBillCountCard02);
          
  //       }) 

  //       //console.log( this.TotalBillCount_Card02[0])
         
  //     })
  // }

  // TotalDiscountAmount()
  // {   

  //   this.TotalDiscountCard03 = 0;
  //   this.TotalDiscount_Card03 = [];

  //     this.dashboardService.GetTotalDiscount().subscribe(response =>    
  //     {   
  //       response.totalDiscountData.forEach(cate=>
  //       {
  //         this.TotalDiscountCard03 = this.TotalDiscountCard03 + cate.totalDiscountCard03;
          
  //         this.TotalDiscount_Card03.push(this.TotalDiscountCard03);
          
  //       }) 

  //       //console.log(this.TotalDiscount_Card03[0])
         
  //     })
  // }

  // TotalCancellationAmount()
  // {   

  //   this.TotalCancellationCard04 = 0;
  //   this.TotalCancellation_Card04 = [];

  //     this.dashboardService.GetTotalDiscount().subscribe(response =>    
  //     {   
  //       response.totalDiscountData.forEach(cate=>
  //       {
  //         this.TotalCancellationCard04 = this.TotalCancellationCard04 + cate.totalCancellationCard04;
          
  //         this.TotalCancellation_Card04.push(this.TotalCancellationCard04);
          
  //       }) 

  //       //console.log(this.TotalDiscount_Card03[0])
         
  //     })
  // }

  /////////////////////////

  filterByDate(event) 
  {
    //this.range = event
    this.dateRange.reset()
  }

}
