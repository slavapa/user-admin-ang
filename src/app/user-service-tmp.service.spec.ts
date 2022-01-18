import { TestBed } from '@angular/core/testing';

import { UserServiceTmpService } from './user-service-tmp.service';

describe('UserServiceTmpService', () => {
  let service: UserServiceTmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceTmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
