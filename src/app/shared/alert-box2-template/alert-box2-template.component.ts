import { Component, OnInit, Inject } from '@angular/core';
import { ModalType } from '../alert-box-template/alert-box-template.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-box2-template',
  templateUrl: './alert-box2-template.component.html',
  styleUrls: ['./alert-box2-template.component.scss']
})
export class AlertBox2TemplateComponent {

  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    this.modalType = data.type;
    
  }

}
