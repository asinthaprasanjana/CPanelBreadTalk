import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { merge,Observable,of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';



export interface RolePropeties {
  
  usercode: string;
  username: string;
  rolecode:string;
  location : string;
  usercontact:string;
  useremail:string;
  edituser:string;

}

const ELEMENT_DATA:RolePropeties[] = [
  {usercode: 'user_01',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_02',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_03',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_04',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_05',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_06',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_07',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_08',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_09',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_10',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
  {usercode: 'user_11',  username: 'username',rolecode:'01',location:'Location 01',usercontact:'0112987822',useremail:'email',edituser:''},
];

@Component({
  selector: 'app-manage-posuser',
  templateUrl: './manage-posuser.component.html',
  styleUrls: ['./manage-posuser.component.scss']
})
export class ManagePOSUserComponent implements OnInit {

  keyword: string = "";
  display: boolean = false;
  isUpdate: boolean = false;

  //displayedColumns: string[] = ['usercode', 'username', 'rolecode','location','usercontact','edituser'];
  displayedColumns: string[] = ['usercode', 'username', 'rolecode','location','usercontact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  selection = new SelectionModel<RolePropeties>(false, []);
  //dataSource: MatTableDataSource<RolePropeties>;

  fields = new FormControl();
  resultsLength = 0;
  isLoadingResults = true;
  filterActive: string = ""
  filterValue: number = 0;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();



    if (this.dataSource.paginator) 
    {
      this.dataSource.paginator.firstPage();
    }

  }
  
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => { this.paginator.pageIndex = 0 });
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.keyword = this.keyword.trim();
          let req = {
            pageId: this.paginator.pageIndex,
            keyword: this.keyword,
            sortActive: this.sort.active,
            sortDirection: this.sort.direction,
            limit: this.paginator.pageSize,
            filterActive: this.filterActive,
            filterValue: this.filterValue
          }
          //return this.customerService.getAllCustomers(req)
          return null; // tempory code
        }),
        map(data => {
          this.isLoadingResults = false;
          // this.resultsLength = data.customers.length > 0 ? data.customers[0].totalCount : 0
          // return data.customers;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => {
        //this.customers = data
        //console.log(data);
        
        //this.resultsLength = data.length > 0 ? data[0].totalCount : 0
      });
  }

  goBack(): void {
    console.log("user");
  }


}
