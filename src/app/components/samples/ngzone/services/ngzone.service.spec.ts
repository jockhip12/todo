import { TestBed, inject } from '@angular/core/testing';

import { NgzoneService } from './ngzone.service';

describe('NgzoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgzoneService]
    });
  });

  it('should be created', inject([NgzoneService], (service: NgzoneService) => {
    expect(service).toBeTruthy();
  }));
});
