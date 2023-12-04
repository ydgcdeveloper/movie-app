import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  private apiLoaded = false;

  @Input() movieItem: MovieModel;

  videoId: string = '';

  ngOnInit(): void {
    this.videoId = this.movieItem.trailer_link.split('=')[1];
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
