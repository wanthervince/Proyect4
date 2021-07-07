import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyect4';
  dadoI = '../assets/img/dice1.png';
  dadoD = '../assets/img/dice5.png';

  n1: number;
  n2: number;

  constructor() {
    this.n1 = 1;
    this.n2 = 1;
  }

  tirardado(): void {
    this.n1 = Math.floor(Math.random() * (6 - 1) + 1);
    this.n2 = Math.floor(Math.random() * (6 - 1) + 1);

    this.dadoI = `../assets/img/dice${this.n1}.png`;
    this.dadoD = `../assets/img/dice${this.n2}.png`;
  }
}
