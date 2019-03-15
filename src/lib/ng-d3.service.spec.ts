import { TestBed } from '@angular/core/testing';

import { NgD3Service } from './ng-d3.service';

describe('NgD3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgD3Service = TestBed.get(NgD3Service);
    expect(service).toBeTruthy();
  });
});
