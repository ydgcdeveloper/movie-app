import { Component, Input } from '@angular/core';
import { SliderMovieItem } from 'src/app/core/models/slider-movie-interface';

@Component({
  selector: 'app-slider-movie-item',
  templateUrl: './slider-movie-item.component.html',
  styleUrls: ['./slider-movie-item.component.css'],
})
export class SliderMovieItemComponent {
  @Input() sliderItem: SliderMovieItem;
}
