import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string = 'https://api.themoviedb.org/3';
  apiKey:string = '6b8347adf7336ac963f99bc510152771';

  constructor(private _http: HttpClient) { }

  getMovies(type:string){
    return this._http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
  }
}
