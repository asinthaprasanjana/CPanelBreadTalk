import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ManageLocationComponent } from './modules/manage-location/manage-location.component';
import { ManagePOSComponent } from './modules/manage-pos/manage-pos.component';
import { ManagePOSUserComponent } from './modules/manage-posuser/manage-posuser.component';
import { ManageRolesComponent } from './modules/manage-roles/manage-roles.component';
import { UpdateRoleComponent } from './modules/update-role/update-role.component';
import { NewPosSettingComponent } from './modules/new-pos-setting/new-pos-setting.component';
import { AppLoginComponent } from './shared/app-login/app-login.component';
import { PosSettingUpdateComponent } from './modules/pos-setting-update/pos-setting-update.component';


const routes: Routes = 
[
  
  {
  path:'',
  component:DefaultComponent,
  children:
  [
    
    {
      path:'',
      component:AppLoginComponent
    },
    {
      path:'Dashboard',
      component:DashboardComponent
    }, 
    
    {
      path:'Locations',
      component:ManageLocationComponent
    },
    {
      path:'pos',
      component:ManagePOSComponent
    },
    {
      path:'posusers',
      component:ManagePOSUserComponent
    },
    {
      path:'roles',
      component:ManageRolesComponent
    },
    {
      path:'rolePrivs',
      component:UpdateRoleComponent
    },
    {
      path:'AddNewPos',
      component:NewPosSettingComponent
    },
    {
      path:'Login',
      component:AppLoginComponent
    },
    {
      path:'pos-setting-update',
      component:PosSettingUpdateComponent
    },

    

    
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
