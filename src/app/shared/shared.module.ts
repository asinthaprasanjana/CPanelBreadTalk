import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from  '@angular/material/divider';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule} from  '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardsComponent } from './widgets/mat-cards/mat-cards.component';
import { SalegraphComponent } from './widgets/salegraph/salegraph.component';
import { LocationSettingsTableComponent } from './widgets/location-settings-table/location-settings-table.component';
import { CollectiongraphComponent } from './widgets/collectiongraph/collectiongraph.component';
import { FastmovingGraphComponent } from './widgets/fastmoving-graph/fastmoving-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogModule } from 'primeng/dialog/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { AlertBoxTemplateComponent } from './alert-box-template/alert-box-template.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLoginComponent } from './app-login/app-login.component';
import { ArchivedGraphComponent } from './widgets/archived-graph/archived-graph.component';
import { MessageServiceComponent } from './MessageServices/message-service/message-service.component';

import { AlertBox2TemplateComponent } from './alert-box2-template/alert-box2-template.component';
import { PreLoginSidePanelComponent } from './PreLoginSidePanel/pre-login-side-panel/pre-login-side-panel.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';


@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatCardsComponent,
    SalegraphComponent,
    LocationSettingsTableComponent,
    CollectiongraphComponent,
    FastmovingGraphComponent,
    AlertBoxTemplateComponent,
    ArchivedGraphComponent,
    AlertBox2TemplateComponent,
    PreLoginSidePanelComponent,
    AppLoginComponent   
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatFormFieldModule,
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
    ConfirmDialogModule,
    BrowserAnimationsModule,

  ],
  exports:[

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatCardsComponent,
    SalegraphComponent,
    CollectiongraphComponent,
    FastmovingGraphComponent,
    ArchivedGraphComponent,    
    LocationSettingsTableComponent,
    AlertBoxTemplateComponent,
    AlertBox2TemplateComponent,
    PreLoginSidePanelComponent,
    AppLoginComponent,
  ]
})

export class SharedModule { }
