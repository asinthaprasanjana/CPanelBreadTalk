import { Injectable } from '@angular/core';
import { MessageServiceComponent } from 'src/app/shared/MessageServices/message-service/message-service.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private messageService: MessageServiceComponent) { }

  showSuccessMessage(messagedetail: string) {
    this.messageService.showSuccessMessage(messagedetail);
  }

  showNotification(header:string,messagedetail: string) {
    this.messageService.showNotification(header,messagedetail);
  }

  showErrorMessage(messagedetail: string) {
    this.messageService.showErrorMessage(messagedetail);

  }
  showWarnningMessage(messagedetail: string) {
    this.messageService.showWarnningMessage(messagedetail);

  }

  showInfoMessage(messagedetail: string) {
    this.messageService.showInfoMessage(messagedetail);

  }

  showConfirmMessage(messagedetail: string) {
    this.messageService.showConfirm(messagedetail);

  }

  clearMessage() {
    this.messageService.clearMessage();

  }
}
