import { TestBed } from '@angular/core/testing';

import { PartyroomService } from '../services/partyroom.service';

describe('PartyroomService', () => {
  let service: PartyroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
