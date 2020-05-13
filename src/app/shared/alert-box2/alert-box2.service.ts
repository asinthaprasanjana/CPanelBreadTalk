import { Injectable } from '@angular/core';
import { AlertBox2TemplateComponent } from '../alert-box2-template/alert-box2-template.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AlertBox2Service {

  constructor(public dialog: MatDialog) { }

  openModal(title:string, message:string, yes:Function = null, no:Function = null) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: title,
        message:message
    };
    dialogConfig.minWidth = 350;
    dialogConfig.minHeight = 150;
    dialogConfig.position = {
      right: '15px',
      
      bottom:'20px'
  };
    const dialogRef = this.dialog.open(AlertBox2TemplateComponent, dialogConfig);

    
  }
}
