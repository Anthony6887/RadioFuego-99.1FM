import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  radio = new Audio('https://rr5100.globalhost1.com/8088/;stream'); // URL del stream de radio
  isPlaying = false;

  toggleRadio() {
    try {
      if (this.isPlaying) {
        this.radio.pause();
      } else {
        this.radio.play();
      }
      this.isPlaying = !this.isPlaying;
    } catch (error) {
      console.error('Error al reproducir la radio:', error);
    }
  }
  
  }
