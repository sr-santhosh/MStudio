import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../../service/movies.service';

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
    this._movies.getMovies('upcoming').subscribe((response:any)=>{

     this.upcoming = response.results;
      console.log(this.upcoming);
      
    })
    this._movies.getMovies('popular').subscribe((response:any)=>{

      this.popular = response.results;
       console.log(this.upcoming);
       
     })
     this._movies.getMovies('toprated').subscribe((response:any)=>{

      this.toprated = response.results;
       console.log(this.toprated);
       
     })

  }
}
