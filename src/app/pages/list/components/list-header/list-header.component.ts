import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sortMovies } from 'src/app/state/actions/movie.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css'],
})
export class ListHeaderComponent {
  constructor(private store: Store<AppState>) {}

  onChangeSort(e: any) {
    this.store.dispatch(sortMovies({ sortby: e.target.value }));
  }
}
