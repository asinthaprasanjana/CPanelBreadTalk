import { TestBed } from '@angular/core/testing';

import { DashboardGraphsServiceServiceService } from './dashboard-graphs-service-service.service';

describe('DashboardGraphsServiceServiceService', () => {
  let service: DashboardGraphsServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGraphsServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
