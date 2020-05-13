import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

export interface LocaUnitSettings {
  code:string;
  name: string;
  unit: string;
  status: string;
  activestatus: boolean;
  user:string;
  saleamount:number;
  editRow:string;
  
}

const ELEMENT_DATA: LocaUnitSettings[] = [

  { code:'Loca01',name: 'Location 01',  unit: '1', status:'online',activestatus: false,user:'username',saleamount:7500,editRow:''},
  { code:'Loca01',name: 'Location 01',  unit: '2', status:'online',activestatus: false,user:'username',saleamount:2500,editRow:''},
  { code:'Loca03',name: 'Location 03',  unit: '1', status:'offline',activestatus: true,user:'username',saleamount:17500,editRow:''},
  { code:'Loca04',name: 'Location 04',  unit: '3', status:'offline',activestatus: false,user:'username',saleamount:27500,editRow:''},
  { code:'Loca05',name: 'Location 05',  unit: '6', status:'online',activestatus: true,user:'username',saleamount:4500,editRow:''},
  { code:'Loca06',name: 'Location 06',  unit: '5', status:'online',activestatus: false,user:'username',saleamount:1500,editRow:''},
  { code:'Loca07',name: 'Location 07',  unit: '1', status:'online',activestatus: false,user:'username',saleamount:75500,editRow:''},
  { code:'Loca08',name: 'Location 08',  unit: '3', status:'online',activestatus: true,user:'username',saleamount:7100,editRow:''},
  { code:'Loca09',name: 'Location 09',  unit: '1', status:'online',activestatus: false,user:'username',saleamount:55500,editRow:''},
  { code:'Loca10',name: 'Location 10',  unit: '1', status:'online',activestatus: true,user:'username',saleamount:7230,editRow:''},
  { code:'Loca11',name: 'Location 11',  unit: '2', status:'offline',activestatus: false,user:'username',saleamount:4500,editRow:''},
  { code:'Loca12',name: 'Location 12',  unit: '3', status:'online',activestatus: false,user:'username',saleamount:75300,editRow:''},
  { code:'Loca13',name: 'Location 13',  unit: '1', status:'online',activestatus: true,user:'username',saleamount:75400,editRow:''},
  { code:'Loca14',name: 'Location 14',  unit: '4', status:'online',activestatus: false,user:'username',saleamount:2500,editRow:''},
  { code:'Loca15',name: 'Location 15',  unit: '1', status:'online',activestatus: true,user:'username',saleamount:6500,editRow:''},

]

@Component({
  selector: 'app-location-settings-table',
  templateUrl: './location-settings-table.component.html',
  styleUrls: ['./location-settings-table.component.scss']
})

export class LocationSettingsTableComponent {

  displayedColumns: string[] = ['name','unit','status','user','saleamount','activestatus','editRow'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

    
  selection = new SelectionModel<LocaUnitSettings>(false, []);
  
  //paginator
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  LocaUnitSettings = [];

  constructor() {

    
  }

  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goBack(): void {
    console.log("loca");
  }


  /* get totalRows(): number {
  return this.myItems.length;
  }

  get activeRows(): number {
    return this.myItems.filter(i => i.state).length;
  }

  get inactiveRows(): number {
    return this.myItems.filter(i => !i.state).length;
  } */

}
