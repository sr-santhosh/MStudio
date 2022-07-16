import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { MovieDto } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string = 'https://api.themoviedb.org/3';
  apiKey:string = '6b8347adf7336ac963f99bc510152771';

  constructor(private _http: HttpClient) { }

  getMovies(type:string, count: number = 12){
    return this._http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
    .pipe(switchMap(res => {
      return of(res.results.slice(0, count)) ;
    })); }

    searchMovies(page:number){
      return this._http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results) ;
      })); }
}
