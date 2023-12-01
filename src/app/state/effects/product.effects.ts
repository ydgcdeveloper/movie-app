import { GET_MOVIES, GET_MOVIES_SUCCESS } from '../actions/movie.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, switchMap, tap, concatMap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieService } from 'src/app/service/movie/movie.service';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(GET_MOVIES),
    mergeMap(() => from(this.movieService.getMovies())
      .pipe(
        map(movies => ({ type: GET_MOVIES_SUCCESS, movies })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) { }
}