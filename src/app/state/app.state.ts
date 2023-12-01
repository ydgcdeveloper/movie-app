import { ActionReducerMap } from '@ngrx/store';
import { MovieState } from '../core/models/movie.state';
import { moviesReducer } from './reducers/product.reducers';

export interface AppState{
    movies: MovieState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    movies: moviesReducer
}