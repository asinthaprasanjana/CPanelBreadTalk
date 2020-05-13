import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

export interface RolePropeties {
  
  Rolecode: number;
  Rolename: string;
  RoleDescription : string;
  EditRole:string;
}

const ELEMENT_DATA:RolePropeties[] = [
  {Rolecode: 1, Rolename: 'Administrator',RoleDescription:'Administrator Role description',EditRole:''},
  {Rolecode: 2, Rolename: 'User',RoleDescription:'User Role description',EditRole:''},
  {Rolecode: 3, Rolename: 'Other',RoleDescription:'Other Role description',EditRole:''},
  {Rolecode: 4, Rolename: 'Administrator',RoleDescription:'Administrator Role description',EditRole:''},
  {Rolecode: 5, Rolename: 'User',RoleDescription:'User Role description',EditRole:''},
  {Rolecode: 6, Rolename: 'Other',RoleDescription:'Other Role description',EditRole:''},
  {Rolecode: 1, Rolename: 'Administrator',RoleDescription:'Administrator Role description',EditRole:''},
  {Rolecode: 2, Rolename: 'User',RoleDescription:'User Role description',EditRole:''},
  {Rolecode: 3, Rolename: 'Other',RoleDescription:'Other Role description',EditRole:''},
  {Rolecode: 4, Rolename: 'Administrator',RoleDescription:'Administrator Role description',EditRole:''},
  {Rolecode: 5, Rolename: 'User',RoleDescription:'User Role description',EditRole:''},
  {Rolecode: 6, Rolename: 'Other',RoleDescription:'Other Role description',EditRole:''}
 
];

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {


  //displayedColumns: string[] = ['Rolecode', 'Rolename', 'RoleDescription','EditRole'];
  displayedColumns: string[] = ['Rolecode', 'Rolename', 'RoleDescription'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<RolePropeties>(false, []);
  
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

  constructor() { }

  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  goBack(): void {
    console.log("Role");
  }


}
