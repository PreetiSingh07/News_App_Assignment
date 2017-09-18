import { TestBed, inject } from '@angular/core/testing';

import { SearchNewsListService } from './search-news-list.service';

describe('SearchNewsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchNewsListService]
    });
  });

  it('should be created', inject([SearchNewsListService], (service: SearchNewsListService) => {
    expect(service).toBeTruthy();
  }));
});
