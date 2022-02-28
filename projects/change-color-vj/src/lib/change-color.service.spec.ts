import { TestBed } from '@angular/core/testing';

import { ChangeColorService } from './change-color.service';

describe('ChangeColorService', () => {
  let service: ChangeColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
