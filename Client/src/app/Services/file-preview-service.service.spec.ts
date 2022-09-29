import { TestBed } from '@angular/core/testing';

import { FilePreviewService } from './file-preview-service.service';

describe('FilePreviewServiceService', () => {
  let service: FilePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
