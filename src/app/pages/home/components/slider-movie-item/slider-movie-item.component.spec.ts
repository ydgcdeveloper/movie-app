import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMovieItemComponent } from './slider-movie-item.component';

describe('SliderMovieItemComponent', () => {
  let component: SliderMovieItemComponent;
  let fixture: ComponentFixture<SliderMovieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderMovieItemComponent]
    });
    fixture = TestBed.createComponent(SliderMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
