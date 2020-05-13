import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../manage-pos/manage-pos.component';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  @ViewChild('locationModal') locationModal: any;
  display: boolean = false;
  isUpdate: boolean = false;

  loca_selector = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  role_selector  = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  

  constructor( private confirmationService: ConfirmationService) { }
  

  ngOnInit(): void {
  }

  toggleCustomerModel(event) {
 
    
    this.display = !this.display
    this.isUpdate = false;
    this.locationModal.reset()
    //console.log(event);
    if (event) {
      //this.customer = event
      this.isUpdate = true;
      this.locationModal.setValues(event)
    }
  }
  

  newModalCalls() {
    this.toggleCustomerModel("")
  }

}
