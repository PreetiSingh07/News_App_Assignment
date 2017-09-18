import { TestBed, inject } from '@angular/core/testing';

import { SeachChannelService } from './seach-channel.service';

describe('SeachChannelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeachChannelService]
    });
  });

  it('should be created', inject([SeachChannelService], (service: SeachChannelService) => {
    expect(service).toBeTruthy();
  }));
});
