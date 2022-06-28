import { Component, OnInit } from '@angular/core';

import { TmdbService } from "src/app/services/tmdb.service";
import { Router } from "@angular/router";

import { Movie } from "src/app/models/movie";
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(public movieService: TmdbService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.endsWith("/popular")) {
      this.movieService.getPopular().pipe(takeUntil(this.destroyed$)).subscribe((response) => {this.movies = response.results});
    }
    else if (this.router.url.endsWith("/top-rated")) {
      this.movieService.getTopRated().pipe(takeUntil(this.destroyed$)).subscribe((response) => {this.movies = response.results});
    }
    else if (this.router.url.endsWith("/search")) {
      this.movieService.searchTermChange.pipe(takeUntil(this.destroyed$)).subscribe({
        next: (searchTerm) => {
          if (searchTerm !== '') {
            this.movieService.search(searchTerm).pipe(takeUntil(this.destroyed$)).subscribe((response) => {
              this.movies = response.results
            });
          }
          else {
            this.movieService.getPopular().pipe(takeUntil(this.destroyed$)).subscribe((response) => {
              this.movies = response.results
            });
          }
        }
      });
    }
    else {
      this.movieService.getPopular().pipe(takeUntil(this.destroyed$)).subscribe((response) => {this.movies = response.results});
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }


}
