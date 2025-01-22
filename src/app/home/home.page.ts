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
  volume: number = 50; // Porcentaje de volumen inicial (50%)

  constructor() {
    this.setVolume(this.volume); // Establecer volumen inicial
  }

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

  setVolume(value: any) {
    const newVolume = Number(value);
    if (!isNaN(newVolume)) {
      this.volume = newVolume;
      this.radio.volume = this.volume / 100; // Convierte de 0-100 a escala 0-1
    } else {
      console.error('El valor del volumen no es un número válido:', value);
    }
  
  

    }
}
