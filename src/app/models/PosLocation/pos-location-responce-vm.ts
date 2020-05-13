import { BaseRequest } from '../base-request';
import { BaseResponce } from '../base-responce';
import { PosLocationVM } from './pos-location-vm';

export interface PosLocationResponceVM extends BaseResponce {

    location?:  PosLocationVM,
    posLocaData?: PosLocationVM[]

}
