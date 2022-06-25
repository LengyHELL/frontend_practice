import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

import { Response } from 'src/app/models/response';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public posterBaseUrl: string = '';
  public posterSizes: string[] = [];

  constructor(public authService: AuthService, public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopular(1).subscribe((response: Response) => {this.movies = response.results as Movie[]});
    this.movieService.getConfig().subscribe((response) => {
      this.posterBaseUrl = response['images']['base_url'];
      this.posterSizes = response['images']['poster_sizes'];
    });
  }

}
