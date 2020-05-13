import { BaseResponce } from '../base-responce';
import { MenuModel, AccessList } from './menu-vm';

export interface MenuResponce extends BaseResponce{

    menuModel?: MenuModel[];
    accessList?: AccessList[];
    allow?: boolean;
    
}
