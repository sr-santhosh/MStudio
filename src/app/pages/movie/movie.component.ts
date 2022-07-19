import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  similarMovies: Movie[] = [];
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesizes = IMAGES_SIZES;
  constructor(
    private _route: ActivatedRoute,
    private _moviesSer: MoviesService
  ) {}
  @Input() items: Movie[] = [];
  @Input() title: string = '';
  ngOnInit(): void {
    this._route.params.pipe(first()).subscribe(({ id }) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }

  ngOnDestroy(): void {
    console.log('Components destoyed');
  }
  getMovie(id: number) {
    this._moviesSer.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: number) {
    this._moviesSer.getMovieVideo(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }
  getMovieImages(id: number) {
    this._moviesSer.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: number) {
    this._moviesSer.getMovieCredits(id).subscribe((movieCreditssData) => {
      this.movieCredits = movieCreditssData;
    });
  }
  getSimilarMovies(id: number) {
    this._moviesSer.getSimilarMovies(id).subscribe((movies) => {
      this.similarMovies = movies;
    });
  }
}
