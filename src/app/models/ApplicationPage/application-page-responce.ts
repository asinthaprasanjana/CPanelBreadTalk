import { BaseResponce } from '../base-responce';
import { ApplicationPageVM } from './application-page-vm';

export interface ApplicationPageResponce extends BaseResponce {
    applicationPageVM: ApplicationPageVM[];
}
