import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genres';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private _moviesSer: MoviesService) {}

  ngOnInit(): void {
    this._moviesSer.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
