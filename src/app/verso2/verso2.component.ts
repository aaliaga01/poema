import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verso2',
  templateUrl: './verso2.component.html',
  styleUrls: ['./verso2.component.css']
})
export class Verso2Component implements OnInit {

  prosas = [
    {
      numero: 1,
      linea:'Una vez, al filo de una lúgubre media noche,'
    },
    {
      numero: 2,
      linea:'mientras débil y cansado, en tristes reflexiones embebido'
    },
    {
      numero: 3,
      linea:'inclinado sobre un viejo y raro libro de olvidada ciencia,'
    },
    {
      numero: 4,
      linea:'cabeceando, casi dormido,'
    },
    {
      numero: 5,
      linea:'oyóse de súbito un leve golpe,'
    },
    {
      numero: 6,
      linea:'como si suavemente tocaran,'
    },
    {
      numero: 7,
      linea:'tocaran a la puerta de mi cuarto.'
    },
    {
      numero: 8,
      linea:'“Es -dije musitando- un visitante'
    },
    {
      numero: 9,
      linea:'tocando quedo a la puerta de mi cuarto.'
    },
    {
      numero: 10,
      linea:'Eso es todo, y nada más.”'
    },
];

  constructor() { }

  ngOnInit() {
  }

}
