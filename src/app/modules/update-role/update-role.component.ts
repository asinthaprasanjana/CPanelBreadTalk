import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {


   //chkboxes
   printer_usb = false;
   printer_serial = false;

   selected_posDevType = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
 
  constructor() { }

  ngOnInit(): void {
  }

}
