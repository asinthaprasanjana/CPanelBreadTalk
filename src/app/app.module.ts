import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { UpdateRoleComponent } from './modules/update-role/update-role.component';
import { UpdateuserComponent } from './modules/updateuser/updateuser.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { NewPosSettingComponent } from './modules/new-pos-setting/new-pos-setting.component';
import { AppLoginComponent } from './shared/app-login/app-login.component';
import { HttpClientService } from './services/ClientService/http-client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageServiceComponent } from './shared/MessageServices/message-service/message-service.component';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BaseService } from './services/base.service';
import { AuthService } from './services/AuthService/auth.service';
import { ApplicationUserService } from './services/application-user.service';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
       
    //OverlayPanelModule,
    //ConfirmDialogModule

  ],

  

  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: HttpClientService,
      multi: true
    },

    
    MessageServiceComponent,
    ConfirmationService,
    BaseService, //
    AuthService,
    MessageService,
    ConfirmationService,

    
    

  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
