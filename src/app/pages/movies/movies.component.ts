import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, take } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreid: string = '';
  constructor(
    private _moviesSer: MoviesService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe(({ genreid }) => {
      if (genreid) {
        console.log(genreid);

        this.genreid = genreid;
        this.getMoiveByGenre(this.genreid);
      }
    });
    this._moviesSer.searchMovies(1).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoiveByGenre(genreid: string) {
    this._moviesSer
      .getMoviesByGenres(genreid)
      .subscribe((moivesByGenreData) => {
        this.movies = moivesByGenreData;
      });
  }
}
