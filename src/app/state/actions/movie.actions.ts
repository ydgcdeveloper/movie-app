import { createAction, props } from '@ngrx/store';
import { MovieModel } from 'src/app/core/models/movie.interface';

export const GET_MOVIES = '[Movies list] Load movies';
export const GET_MOVIES_SUCCESS = '[Movies list] Movies Loaded Success';
export const GET_MOVIES_ERROR = '[Movies list] Movies Loaded Error';

export const loadMovies = createAction(GET_MOVIES);

export const loadedMovies = createAction(
  GET_MOVIES_SUCCESS,
  props<{ movies: MovieModel[] }>()
);

export const loadedMoviesError = createAction(
  GET_MOVIES_ERROR,
  props<{ error: Error }>()
);

export const SORT_MOVIES = '[Movies list] Sort Movies';

export const sortMovies = createAction(
  SORT_MOVIES,
  props<{ sortby: 'title' | 'released_date' }>()
);

export const ADD_TO_WATCHLIST = '[Movies list] Add to watchlist';

export const addToWatchlist = createAction(
  ADD_TO_WATCHLIST,
  props<{ id: number | undefined }>()
);

export const REMOVE_FROM_WATCHLIST = '[Movies list] Remove from watchlist';

export const removeFromWatchlist = createAction(
  REMOVE_FROM_WATCHLIST,
  props<{ id: number | undefined }>()
);
