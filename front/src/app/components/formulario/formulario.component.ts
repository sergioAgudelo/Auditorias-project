import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  preguntas = [
    {
      "numero": "1",
      "pregunta": "pregunta 1"
    },
    {
      "numero": "2",
      "pregunta": "pregunta 2"
    },
    {
      "numero": "3",
      "pregunta": "pregunta 3"
    },
  ]

}
