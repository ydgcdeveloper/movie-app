import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.interface';
import { AppState } from 'src/app/state/app.state';
import { selectMoviesList } from 'src/app/state/selectors/product.selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);
  private activatedRoute = inject(ActivatedRoute);

  private routeParam: string;
  movieItem: MovieModel;

  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.routeParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.routeParam) {
      this.store
        .select(selectMoviesList)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data) => {
          this.movieItem = data.find(
            (item) => item.id === Number(this.routeParam)
          );
        });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
