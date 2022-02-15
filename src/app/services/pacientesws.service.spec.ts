import { TestBed } from '@angular/core/testing';

import { PacienteswsService } from './pacientesws.service';

describe('PacienteswsService', () => {
  let service: PacienteswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
