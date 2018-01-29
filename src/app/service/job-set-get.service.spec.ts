import { TestBed, inject } from '@angular/core/testing';

import { JobSetGetService } from './job-set-get.service';

describe('JobSetGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobSetGetService]
    });
  });

  it('should be created', inject([JobSetGetService], (service: JobSetGetService) => {
    expect(service).toBeTruthy();
  }));
});
