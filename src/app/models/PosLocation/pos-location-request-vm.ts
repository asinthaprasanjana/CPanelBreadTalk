import { BaseRequest } from '../base-request';
import { PosLocationVM } from './pos-location-vm';

export interface PosLocationRequestVM extends BaseRequest{

    location?:  PosLocationVM,
}
