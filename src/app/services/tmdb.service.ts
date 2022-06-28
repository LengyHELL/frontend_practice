import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import { Response } from "../models/response";

const API = {
  KEY: '8394a842c1c83041af8384d30d91feaa',
  POSTER_BASE: 'https://image.tmdb.org/t/p/w200',
  CONFIGURATION: 'https://api.themoviedb.org/3/configuration?api_key=<api_key>&language=en-US',
  POPULAR: 'https://api.themoviedb.org/3/movie/popular?api_key=<api_key>&language=en-US&page=<page>',
  TOP_RATED: 'https://api.themoviedb.org/3/movie/top_rated?api_key=<api_key>&language=en-US&page=<page>',
  TRENDING: 'https://api.themoviedb.org/3/trending/all/week?api_key=<api_key>&language=en-US&page=<page>',
  SEARCH: 'https://api.themoviedb.org/3/search/movie?api_key=<api_key>&language=en-US&query=<query>&page=<page>&include_adult=false'
}
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private page: number = 1;
  private apiKey: string = API.KEY;
  public posterBase: string = API.POSTER_BASE;

  searchTermChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http : HttpClient) { }

  getPopular() : Observable<Response> {
    return this.http.get<Response>(API.POPULAR.replace('<api_key>', `${this.apiKey}`).replace('<page>', `${this.page}`));
  }

  getTopRated() : Observable<Response> {
    return this.http.get<Response>(API.TOP_RATED.replace('<api_key>', `${this.apiKey}`).replace('<page>', `${this.page}`));
  }

  getTrending() : Observable<Response> { // some movie titles missing from response
    return this.http.get<Response>(API.TRENDING.replace('<api_key>', `${this.apiKey}`).replace('<page>', `${this.page}`));
  }

  search(searchTerm: string) : Observable<Response> {
    return this.http.get<Response>(API.SEARCH.replace('<api_key>', `${this.apiKey}`).replace('<query>', `${searchTerm}`).replace('<page>', `${this.page}`));
  }
}
