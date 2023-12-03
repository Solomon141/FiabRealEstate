import { TestBed } from '@angular/core/testing';

import { RoomsizeService } from './roomsize.service';

describe('RoomsizeService', () => {
  let service: RoomsizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
