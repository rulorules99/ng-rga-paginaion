import { TestBed } from '@angular/core/testing';

import { NgRgaPaginaionService } from './ng-rga-paginaion.service';

describe('NgRgaPaginaionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRgaPaginaionService = TestBed.get(NgRgaPaginaionService);
    expect(service).toBeTruthy();
  });
});
