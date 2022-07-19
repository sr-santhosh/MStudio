import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger ('fade', [state('void', style ({opacity: 0})), 
    transition('void <=> *', [animate('1s')])]
    )
  ]})
export class SliderComponent implements OnInit {

  @Input() items:Movie[] = [];
  @Input() isBanner:boolean = false
  sliderindex:number = 0;
  readonly imagesSizes = IMAGES_SIZES


  ngOnInit(): void {
    if(!this.isBanner){
      setInterval( ()=>{
        this.sliderindex = ++this.sliderindex % this.items.length;
      },4000)
    }
  }

}
