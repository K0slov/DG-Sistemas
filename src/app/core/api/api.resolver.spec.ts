import { TestBed } from '@angular/core/testing';

import { ApiResolver } from './api.resolver';

describe('ApiResolver', () => {
  let resolver: ApiResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ApiResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
