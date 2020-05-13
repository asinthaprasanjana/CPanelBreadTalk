import { BaseRequest } from '../base-request';
import { ApplicationPageVM } from './application-page-vm';

export interface ApplicationPageRequest extends BaseRequest {

    applicationPageVM?:ApplicationPageVM;
}
