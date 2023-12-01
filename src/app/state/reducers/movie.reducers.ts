import { MovieModel } from 'src/app/core/models/movie.interface';
import { createReducer, on } from '@ngrx/store';
import { MovieState } from 'src/app/core/models/movie.state';
import {
  addToWatchlist,
  loadMovies,
  loadedMovies,
  sortMovies,
} from '../actions/movie.actions';

const WATCH_LIST = '_watchList';

export const initialState: MovieState = { loading: false, movies: [] };

export const moviesReducer = createReducer(
  initialState,
  on(loadMovies, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMovies, (state, { movies }) => {
    let watchList = localStorage.getItem(WATCH_LIST);
    if (watchList) {
      const watchListArr = JSON.parse(watchList) as [];
      if (watchListArr?.length) {
        const watchListIds = watchListArr.map((item: MovieModel) => item?.id);
        movies = movies.map((movie) => {
          return { ...movie, watchList: watchListIds.includes(movie.id) };
        });
      }
    }
    return { ...state, loading: false, movies };
  }),
  on(sortMovies, (state, { sortby }) => {
    const sortedMovies = [...state.movies];

    sortedMovies.sort((a, b) => {
      if (a[sortby] < b[sortby]) {
        return -1;
      } else if (a[sortby] > b[sortby]) {
        return 1;
      } else {
        return 0;
      }
    });

    return { ...state, movies: sortedMovies };
  }),
  on(addToWatchlist, (state, { id }) => {
    let movies = [...state.movies];
    let index: number = movies.findIndex((item) => item.id == id);
    if (index != -1) {
      movies[index] = { ...movies[index], watchList: true };

      let watchList = localStorage.getItem(WATCH_LIST);
      if (watchList) {
        const watchListArr = JSON.parse(watchList) as MovieModel[];
        if (watchListArr) {
          watchListArr.push(movies[index]);
        }
        localStorage.setItem(WATCH_LIST, JSON.stringify(watchListArr));
        console.log(watchList);
      } else {
        localStorage.setItem(WATCH_LIST, JSON.stringify([movies[index]]));
      }
    }
    return { ...state, movies };
  })
);
