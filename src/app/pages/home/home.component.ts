import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { sliderItems } from 'src/app/core/data/movies.data';
import { SliderMovieItem } from 'src/app/core/models/slider-movie-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderImages: SliderMovieItem[] = sliderItems;
  arraySliderImages: SliderMovieItem[][] = [];
  sliderInterval = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.arraySliderImages = [
      this.shuffleArray(this.sliderImages),
      this.shuffleArray(this.sliderImages),
      this.shuffleArray(this.sliderImages),
      this.shuffleArray(this.sliderImages),
    ];
  }

  shuffleArray(array: any[]): any[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  ngOnInit(): void {
    this.setTheme();
    this.setSlider();
    this.setAutoSlider();
  }

  ngOnDestroy(): void {
    if (this.sliderInterval) clearInterval(this.sliderInterval);
  }

  setTheme() {
    const ball = document.querySelector('.toggle-ball');
    const items = document.querySelectorAll(
      '.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle'
    );

    ball.addEventListener('click', () => {
      items.forEach((item) => {
        item.classList.toggle('active');
      });
      ball.classList.toggle('active');
    });
  }

  setSlider() {
    const arrows = document.querySelectorAll('.arrow');
    const movieLists = document.querySelectorAll('.movie-list');

    arrows.forEach((arrow, i) => {
      const itemNumber = this.sliderImages.length;
      let clickCounter = 0;
      arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
          (movieLists[i] as HTMLElement).style.transform = `translateX(${
            movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
          }px)`;
        } else {
          (movieLists[i] as HTMLElement).style.transform = 'translateX(0)';
          clickCounter = 0;
        }
      });
    });
  }

  setAutoSlider() {
    const arrows = document.querySelectorAll('.arrow');
    this.sliderInterval = setInterval(() => {
      arrows.forEach((arrow, i) => {
        if (i % 2 == 0) {
          (arrow as HTMLElement)?.click();
        }
      });
    }, 2500);
  }
}
