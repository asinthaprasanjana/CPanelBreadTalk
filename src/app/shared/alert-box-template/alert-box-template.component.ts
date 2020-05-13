import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-alert-box-template',
  templateUrl: './alert-box-template.component.html',
  styleUrls: ['./alert-box-template.component.scss']
})
export class AlertBoxTemplateComponent{

  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    this.modalType = data.type;
    
    console.log(data)
  }

}

export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}
