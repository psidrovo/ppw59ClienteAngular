import { TestBed } from '@angular/core/testing';

import { HstClinicawsService } from './hst-clinicaws.service';

describe('HstClinicawsService', () => {
  let service: HstClinicawsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HstClinicawsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
