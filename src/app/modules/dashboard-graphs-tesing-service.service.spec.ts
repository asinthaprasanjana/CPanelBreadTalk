import { TestBed } from '@angular/core/testing';

import { DashboardGraphsTesingServiceService } from './dashboard-graphs-tesing-service.service';

describe('DashboardGraphsTesingServiceService', () => {
  let service: DashboardGraphsTesingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGraphsTesingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
