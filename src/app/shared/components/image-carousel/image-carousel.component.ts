import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  counter = 0;

  nextImage() {
    this.counter++;
  }

  prevImage() {
    this.counter--;
  }
}
