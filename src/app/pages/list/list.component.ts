import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovies } from 'src/app/state/actions/movie.actions';
import { AppState } from 'src/app/state/app.state';
import { selectMoviesList } from 'src/app/state/selectors/product.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  movies$: Observable<any> = new Observable();

  private store = inject(Store<AppState>);

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMoviesList);
  }
}
