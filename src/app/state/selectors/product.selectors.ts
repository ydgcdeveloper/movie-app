import { MovieState } from 'src/app/core/models/movie.state';
import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const selectMoviesFeature = (state: AppState) => state.movies;

export const selectMoviesList = createSelector(
  selectMoviesFeature,
  (state: MovieState) => {
    return state.movies;
  }
);

export const selectProductsLoading = createSelector(
  selectMoviesFeature,
  (state: MovieState) => state.loading
);
