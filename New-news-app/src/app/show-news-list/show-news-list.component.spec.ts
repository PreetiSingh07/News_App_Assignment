import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsListComponent } from './show-news-list.component';

describe('ShowNewsListComponent', () => {
  let component: ShowNewsListComponent;
  let fixture: ComponentFixture<ShowNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
