import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ManageLocationComponent } from 'src/app/modules/manage-location/manage-location.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagePOSComponent } from 'src/app/modules/manage-pos/manage-pos.component';
import { ManagePOSUserComponent } from 'src/app/modules/manage-posuser/manage-posuser.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FlexLayoutModule } from '@angular/flex-layout';
import { A11yModule } from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { UpdateLocationComponent } from 'src/app/modules/update-location/update-location.component';
import { MatInput} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardGraphsServiceServiceService } from 'src/app/services/dashboard-graphs-service-service.service';
import { HighchartsChartModule } from 'highcharts-angular';

//used for mat-table with togle button
import { BrowserModule } from '@angular/platform-browser';
import { LocationSettingsTableComponent } from 'src/app/shared/widgets/location-settings-table/location-settings-table.component';
import { ManageRolesComponent } from 'src/app/modules/manage-roles/manage-roles.component';
import { UpdateRoleComponent } from 'src/app/modules/update-role/update-role.component';
import { UpdateuserComponent } from 'src/app/modules/updateuser/updateuser.component';

//used for backgrop dialog box
import {DialogModule } from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { BaseService } from 'src/app/services/base.service';
import { ConfirmationService } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertBoxTemplateComponent } from 'src/app/shared/alert-box-template/alert-box-template.component';
import { NewPosSettingComponent } from 'src/app/modules/new-pos-setting/new-pos-setting.component';

import { DxTreeListModule, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from "devextreme-angular";
import { PosSettingUpdateComponent } from 'src/app/modules/pos-setting-update/pos-setting-update.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/ClientService/http-client.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { MessageServiceComponent } from 'src/app/shared/MessageServices/message-service/message-service.component';
import { AppLoginComponent } from 'src/app/shared/app-login/app-login.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

@NgModule({
  declarations: [

    DefaultComponent,
    DashboardComponent,
    ManageLocationComponent,
    ManagePOSComponent,
    ManagePOSUserComponent,
    UpdateLocationComponent,
    ManageRolesComponent,
    UpdateRoleComponent,
    UpdateuserComponent,
    NewPosSettingComponent,
    PosSettingUpdateComponent,
    //AppLoginComponent,
  ],
  imports: [

    HttpClientModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DialogModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DxTreeListModule,
    BrowserModule,
    
  ],




   providers: [ 
          
      DashboardGraphsServiceServiceService,    
      DatePipe
      
   ]

   
})
export class DefaultModule { }
