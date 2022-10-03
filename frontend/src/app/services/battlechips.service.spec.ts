import { TestBed } from '@angular/core/testing';

import { BattlechipsService } from './battlechips.service';

describe('BattlechipsService', () => {
  let service: BattlechipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlechipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
