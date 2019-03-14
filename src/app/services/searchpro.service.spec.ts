import { TestBed } from '@angular/core/testing';

import { SearchproService } from './searchpro.service';

describe('SearchproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchproService = TestBed.get(SearchproService);
    expect(service).toBeTruthy();
  });
});
