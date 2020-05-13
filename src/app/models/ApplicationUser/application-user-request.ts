import { BaseRequest } from '../base-request';
import { ApplicationUserVM } from './application-user-vm';

export interface ApplicationUserRequest extends BaseRequest{
    
    applicationUserVM?:ApplicationUserVM; 
}
