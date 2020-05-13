import { ApplicationPageVM } from '../ApplicationPage/application-page-vm';
import { MenuModel } from '../ApplicationMenu/menu-vm';

export class ApplicationUserVM {

    userID?: number;
    username?: string;
    roleName?:string;
    roleId?:number;
    branch?:number;
    branchID?:number; 
    newPassword?: string;
    currentPassword?: string;
    companyId?:number;
    firstName?:string;
    lastName?:string;
    nicNo?:string;
    birthday?:Date;
    expirationDate?:Date;
    mobileNo?:number;
    email?:string;
    address?:string;
    duplicateLogIn : string;
    token?:string;

    applicationPageVM: ApplicationPageVM[];
    menuModel : MenuModel[];

   

}
