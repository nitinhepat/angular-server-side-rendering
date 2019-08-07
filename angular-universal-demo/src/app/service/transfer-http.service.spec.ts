import { TestBed } from '@angular/core/testing';

import { TransferHttpService } from './transfer-http.service';

describe('TransferHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferHttpService = TestBed.get(TransferHttpService);
    expect(service).toBeTruthy();
  });
});
