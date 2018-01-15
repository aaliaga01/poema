import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verso1',
  templateUrl: './verso1.component.html',
  styleUrls: ['./verso1.component.css']
})
export class Verso1Component implements OnInit {

  prosas = [
    {
      numero: 1,
      linea:'¡Ah! aquel lúcido recuerdo'
    },
    {
      numero: 2,
      linea:'de un gélido diciembre;'
    },
    {
      numero: 3,
      linea:'espectros de brasas moribundas'
    },
    {
      numero: 4,
      linea:'reflejadas en el suelo;'
    },
    {
      numero: 5,
      linea:'angustia del deseo del nuevo día;'
    },
    {
      numero: 6,
      linea:'en vano encareciendo a mis libros'
    },
    {
      numero: 7,
      linea:'dieran tregua a mi dolor.'
    },
    {
      numero: 8,
      linea:'“Dolor por la pérdida de Leonora, la única,'
    },
    {
      numero: 9,
      linea:'virgen radiante, Leonora por los ángeles llamada.'
    },
    {
      numero: 10,
      linea:'Aquí ya sin nombre, para siempre.'
    },
];

  constructor() { }

  ngOnInit() {
  }

}
