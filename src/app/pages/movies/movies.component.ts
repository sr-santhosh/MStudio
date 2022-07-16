import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private _moviesSer: MoviesService) { }

  ngOnInit(): void {

    this._moviesSer.searchMovies(1).subscribe((movies) => {
      this.movies = movies;
    
      
    } )
  }

}
