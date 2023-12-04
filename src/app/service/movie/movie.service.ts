import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { moviesData } from 'src/app/core/data/movies.data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  async getMovies(): Promise<any> {
    return moviesData;
  }
}
