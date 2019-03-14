import { TestBed } from '@angular/core/testing';

import { PastorderService } from './pastorder.service';

describe('PastorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastorderService = TestBed.get(PastorderService);
    expect(service).toBeTruthy();
  });
});
