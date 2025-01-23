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

  shareApp() {
    if (navigator.share) {
      // Usa el Web Share API para compartir contenido
      navigator.share({
        title: 'Radio Fuego 99.1 FM',
        text: '¡Escucha la mejor música en Radio Fuego 99.1 FM! Desde Zaruma – El Oro.',
        url: 'https://www.radiofuego991fm.com', // Cambia esto por el enlace de tu app o sitio web
      })
        .then(() => console.log('Compartido con éxito'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
      // Alternativa para navegadores que no soportan Web Share API
      alert('La funcionalidad de compartir no está soportada en este dispositivo.');
    }
  }
}
