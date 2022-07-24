import { TestBed } from '@angular/core/testing';

import { AllArraysService } from './all-arrays.service';

describe('AllArraysService', () => {
  let service: AllArraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllArraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
