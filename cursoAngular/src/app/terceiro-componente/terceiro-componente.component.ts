import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrls: ['./terceiro-componente.component.css']
})
export class TerceiroComponenteComponent implements OnInit {

  numero: number;
  constructor() { }

  ngOnInit() { }

    obtemNumero(valor: number){
      this.numero = valor + 20;
    }

}
