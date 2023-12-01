import { createReducer, on } from '@ngrx/store';
import { MovieState } from 'src/app/core/models/movie.state';
import { loadMovies, loadedMovies } from '../actions/movie.actions';
import { moviesData } from 'src/app/core/data/movies.data';


export const initialState: MovieState = { loading: false, movies: moviesData }

export const moviesReducer = createReducer(
    initialState,
    on(loadMovies, (state) => { return { ...state, loading: true } }),
    on(loadedMovies, (state, { movies }) => { return { ...state, loading: false, movies } }),
    // on(updatedMovie, (state, { product }) => {
    //     let products = [...state.movies]
    //     let index: number = products.findIndex((p) => p.id == product.id);
    //     if (index != -1) {
    //         products[index] = product;
    //     }
    //     return { ...state, products }
    // }),
);