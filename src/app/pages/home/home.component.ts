import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  upcoming:Movie[]= [];
  popular:Movie[]= [];
  toprated:Movie[]= [];
  
  constructor(private _movies:MoviesService) { }
  ngOnInit(): void {
    this._movies.getMovies('upcoming').subscribe((movies)=>{

     this.upcoming = movies;
      
    })
    this._movies.getMovies('popular').subscribe((movies)=>{

      this.popular = movies;
       
     })
     this._movies.getMovies('top_rated').subscribe((movies)=>{

      this.toprated = movies;
       
     })

  }
}
