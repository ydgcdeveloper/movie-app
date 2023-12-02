import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieModel } from 'src/app/core/models/movie.interface';
import {
  addToWatchlist,
  removeFromWatchlist,
} from 'src/app/state/actions/movie.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input()
  movie: MovieModel;
  @Input()
  showToggle: boolean = false;
  @Input()
  goToDetails: boolean = true;

  constructor(private store: Store<AppState>) {}

  add() {
    this.store.dispatch(addToWatchlist({ id: this.movie.id }));
  }

  remove() {
    this.store.dispatch(removeFromWatchlist({ id: this.movie.id }));
  }

  addRemoveFromWathcList(e) {
    if (e) {
      this.add();
    } else {
      this.remove();
    }
  }
}
