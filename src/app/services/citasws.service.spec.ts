import { TestBed } from '@angular/core/testing';

import { CitaswsService } from './citasws.service';

describe('CitaswsService', () => {
  let service: CitaswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
