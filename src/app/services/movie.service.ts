import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Response } from '../models/response';

const API = {
  KEY: "8394a842c1c83041af8384d30d91feaa",
  CONFIG: "https://api.themoviedb.org/3/configuration?api_key=<api_key>&language=en-US",
  GENRES: "https://api.themoviedb.org/3/genre/movie/list?api_key=<api_key>&language=en-US",
  POPULAR: "https://api.themoviedb.org/3/movie/popular?api_key=<api_key>&page=<page>&language=en-US",
  SEARCH: "https://api.themoviedb.org/3/search/company?api_key=<api_key>&query=<query>&page=<page>&language=en-US",
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getPopular(page: number): Observable<Response> {
    return this.http.get<Response>(API.POPULAR.replace('<api_key>', `${API.KEY}`).replace('<page>', `${page}`));
  }

  getConfig(): Observable<any> {
    return this.http.get(API.CONFIG.replace('<api_key>', `${API.KEY}`));
  }
}
