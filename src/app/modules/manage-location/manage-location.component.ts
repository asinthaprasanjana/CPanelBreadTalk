import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonService } from 'src/app/services/CommonServices/common.service';
import { DeviceService } from 'src/app/services/DeviceService/device.service';
import { PosLocationService } from 'src/app/services/PosLocationService/pos-location.service';
import { PosLocationVM } from 'src/app/models/PosLocation/pos-location-vm';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AlertServiceService } from 'src/app/shared/alert-box/alert-service.service';



export interface LocationPropeties {
  name: string;
  code: number;
  address: string;
  contact: string;
  email : string;
  contactperson:string;
}



@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.scss']
})

export class ManageLocationComponent implements OnInit {


  form: FormGroup;
  isUpdate: boolean = false;
  selectedId: number;

  PosLocations: PosLocationVM[] = [];
  uploading: boolean;
  loading: boolean = false;

  displayedColumns: string[] = ['code', 'name', 'address', 'contact','email','contactperson'];
  //displayedColumns: string[] = ['name', 'address', 'contact','email','contactperson'];
  
  dataSource = null;
  selection = new SelectionModel<LocationPropeties>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) 
    {
      this.dataSource.paginator.firstPage();
    }

  }

  @Output() importOut = new EventEmitter<any>()


  locationForm: FormGroup

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  

  constructor(
    private PosLocationservice: PosLocationService,
    private commonService: CommonService,
    private deviceService: DeviceService,

    //update loca related
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    public dialogService:AlertServiceService

  ) { }

  //use for alert box 
  saveModal() {
    var data = null;//call api
    this.dialogService.openModal("Save Location","Confirm Action ?", ()=>{
      //confirmed
      console.log('Yes');
    }, ()=>{
      //not confirmed
      console.log('No');
    });
   
  }

  deleteModal() {
    var data = null;//call api
    this.dialogService.openModal("Delete Location","Confirm Action ?", 
    
    ()=>{
      //confirmed
      console.log('Yes');
    }, 
    
    ()=>{
      //not confirmed
      console.log('No');
    });
   
  }

  ngOnInit(){

    this.GetPosLocations();

    this.form = this.fb.group({
      id: new FormControl(''),
      code: new FormControl('', Validators.compose([Validators.required])),
      name: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      contact: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      contactperson: new FormControl('', Validators.compose([Validators.required]))
    })
    
  }

  get formControl() {return this.locationForm.controls;}
  get formValue() {return this.locationForm.value; }

  GetPosLocations(){

    this.loading = true;
    
    this.PosLocationservice.getAllPosLocations().subscribe(response => {

      if (response.isSuccess) 
      {

        this.PosLocations = response.posLocaData

        this.dataSource = new MatTableDataSource(this.PosLocations);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.loading = false;
      } 

      else 
      {
        this.commonService.showErrorMessage(response.message)
      }

    })
  }

  rowSelect(category) {

    //console.log(category);

    this.isUpdate = true;
    this.selectedId = category.id
    this.form.patchValue({
      
      code: category.code,
      name: category.name, 
      address:category.address,
      contact:category.contact,
      email:category.email,
      contactperson:category.contactperson
    })
  }

}
