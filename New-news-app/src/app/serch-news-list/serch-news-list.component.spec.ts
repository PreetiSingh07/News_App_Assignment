import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchNewsListComponent } from './serch-news-list.component';

describe('SerchNewsListComponent', () => {
  let component: SerchNewsListComponent;
  let fixture: ComponentFixture<SerchNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
