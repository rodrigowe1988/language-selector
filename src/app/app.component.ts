import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  language: string = '';

  changeLanguage() {
    console.log('idioma alterado');
  }

  portuguese() {
    this.language = "Idioma português escolhido"
  }

  spanish() {
    this.language = "Idioma español elegido";
  }


}
