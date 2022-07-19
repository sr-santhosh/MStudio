import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { startWith } from 'rxjs';

@Component({
  selector: 'video-embeded',
  templateUrl: './video-embeded.component.html',
  styleUrls: ['./video-embeded.component.scss']
})
export class VideoEmbededComponent implements OnInit {

  @Input() site:string = "Vimeo"
  @Input() key:string | null = null;

  videoUrl: SafeResourceUrl = '';

  ytUrl = 'https://www.youtube.com/embed/';
  vimeoUrl = "https://www.vimeo.com/embed/";
  
  constructor(private _sanit:DomSanitizer) { }

  ngOnInit(): void {

    switch(this.site){
      case 'YouTube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
        case 'Vimeo':
          this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
          break;
    }

    
  }

    getSafeUrl(url:string){
      return this._sanit.bypassSecurityTrustResourceUrl(url);
    }
  }


