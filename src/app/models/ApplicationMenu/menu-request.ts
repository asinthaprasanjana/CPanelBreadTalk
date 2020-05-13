import { BaseRequest } from '../base-request';
import { MenuModel } from './menu-vm';

export interface MenuRequest extends BaseRequest {
    menuVM?: MenuModel[];
}
