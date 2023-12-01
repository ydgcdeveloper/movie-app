import { MovieModel } from './movie.interface';

export interface MovieState{
    loading: boolean,
    movies: ReadonlyArray<MovieModel>
}