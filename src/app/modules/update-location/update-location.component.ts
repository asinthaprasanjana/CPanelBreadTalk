import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AlertServiceService } from 'src/app/shared/alert-box/alert-service.service';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss']
})

export class UpdateLocationComponent implements OnInit {

  @Output() importOut = new EventEmitter<any>()


  locationForm: FormGroup

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  constructor(private fb: FormBuilder,private confirmationService: ConfirmationService,
    public dialogService:AlertServiceService) { }

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
    this.dialogService.openModal("Delete Location","Confirm Action ?", ()=>{
      //confirmed
      console.log('Yes');
    }, ()=>{
      //not confirmed
      console.log('No');
    });
   
  }

  ngOnInit(){
  }

  get formControl() {return this.locationForm.controls;}
  get formValue() {return this.locationForm.value; }

}
