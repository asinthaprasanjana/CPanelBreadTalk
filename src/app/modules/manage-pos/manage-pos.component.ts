import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-manage-pos',
  templateUrl: './manage-pos.component.html',
  styleUrls: ['./manage-pos.component.scss']
})


export class ManagePOSComponent {

  step = 0;
  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  //droup down list related 
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_posDevType = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_posPrinter = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_vfd = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_secDisplay = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_billheadermsg = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_billheaderTrlmsg = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selected_vdfmsg = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  //chkboxes
  printer_usb = false;
  printer_serial = false;

  customerdisplay_usb = false;
  customerdisplay_serial = false;

  customerdisplay_vfd = false;
  customerdisplay_secondDisplay = false;

  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  matcher = new MyErrorStateMatcher();
  
  constructor(public dialog: MatDialog) { }


  

  ngOnInit(): void {
  }

}
