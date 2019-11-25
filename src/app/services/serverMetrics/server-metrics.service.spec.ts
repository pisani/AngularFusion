import { TestBed, inject } from '@angular/core/testing';

import { ServerMetricsService } from './server-metrics.service';

describe('ServerMetricsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerMetricsService]
    });
  });

  it('should be created', inject([ServerMetricsService], (service: ServerMetricsService) => {
    expect(service).toBeTruthy();
  }));
});
