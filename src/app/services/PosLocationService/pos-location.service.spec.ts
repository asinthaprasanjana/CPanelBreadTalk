import { TestBed } from '@angular/core/testing';

import { PosLocationService } from './pos-location.service';

describe('PosLocationService', () => {
  let service: PosLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
