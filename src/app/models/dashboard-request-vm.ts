import { BaseRequest } from './base-request';
import { DashboardVM } from './dashboard-vm';

export interface DashboardRequestVM extends BaseRequest {
    request?:DashboardVM
}
