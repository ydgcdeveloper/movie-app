import { Component, Input } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input()
  movie!: MovieModel;
}
