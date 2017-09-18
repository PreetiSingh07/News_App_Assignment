import { TestBed, inject } from '@angular/core/testing';

import { AddToFavoriteService } from './add-to-favorite.service';

describe('AddToFavoriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToFavoriteService]
    });
  });

  it('should be created', inject([AddToFavoriteService], (service: AddToFavoriteService) => {
    expect(service).toBeTruthy();
  }));
});
