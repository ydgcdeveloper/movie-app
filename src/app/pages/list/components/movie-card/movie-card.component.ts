import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieModel } from 'src/app/core/models/movie.interface';
import { addToWatchlist } from 'src/app/state/actions/movie.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input()
  movie!: MovieModel;

  constructor(private store: Store<AppState>) {}

  add() {
    this.store.dispatch(addToWatchlist({ id: this.movie.id }));
  }
}
