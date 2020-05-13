import { BaseResponce } from '../base-responce';
import { ApplicationUserVM } from './application-user-vm';

export interface ApplicationUserResponce extends BaseResponce{
    
    applicationUserVM?:ApplicationUserVM[]; 
    applicationUserVm?:ApplicationUserVM; 
}
