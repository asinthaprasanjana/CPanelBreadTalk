import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.scss']
})
export class MessageServiceComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(){
  }

  showSuccessMessage(messagedetail: string) {

    this.messageService.add({ severity: 'success', summary: 'Success', detail: messagedetail });

    setTimeout(() => {
     // this.clearMessage();
    }, 700000);
  }

  showNotification(header: string, messagedetail: string) {
    this.messageService.add({ severity: 'success', summary: header, detail: messagedetail });

    setTimeout(() => {
     // this.clearMessage();
    }, 7000);
  }


  showErrorMessage(messagedetail: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: messagedetail });

    setTimeout(() => {
   //   this.clearMessage();
    }, 7000);
  }
  showWarnningMessage(messagedetail: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warnning', detail: messagedetail });
    setTimeout(() => {
    //  this.clearMessage();
    }, 5000);

  }

  showInfoMessage(messagedetail: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: messagedetail });
    setTimeout(() => {
    //  this.clearMessage();
    }, 3000);
  }

  showConfirm(messagedetail: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: messagedetail });
  }

  clearMessage() {
   // this.messageService.clear();
  }

  onReject() {

  }

}
