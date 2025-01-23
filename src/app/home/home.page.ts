import { Component } from '@angular/core';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  radio = new Audio('https://rr5100.globalhost1.com/8088/;stream'); // URL del stream de radio
  isPlaying: boolean = false; // Estado de reproducción de la radio
  volume: number = 50; // Porcentaje de volumen inicial (50%)

  constructor() {
    this.setVolume(this.volume); // Establecer volumen inicial
  }
  changeVolume(event: any) {
    const newVolume = event.detail.value;
    console.log('Nuevo volumen:', newVolume);
    // Lógica para ajustar el volumen del audio
  }

  muteVolume() {
    this.volume = 0;
    console.log('Volumen silenciado');
    // Lógica para silenciar el audio
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

  async shareApp() {
    try {
      await Share.share({
        title: 'Radio Fuego 99.1 FM',
        text: '¡Escucha la mejor música en Radio Fuego 99.1 FM! Desde Zaruma – El Oro.',
        url: 'https://hmradiofuego.com/portal/', // Cambia esto por el enlace de tu app o sitio web
        dialogTitle: 'Compartir Radio Fuego',
      });
      console.log('Compartido con éxito');
    } catch (error) {
      console.error('Error al compartir:', error);
      alert('No se pudo compartir el contenido. Intenta nuevamente.');
    }
  }
}
