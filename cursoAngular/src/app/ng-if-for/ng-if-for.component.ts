import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-for',
  templateUrl: './ng-if-for.component.html',
  styleUrls: ['./ng-if-for.component.css']
})
export class NgIfForComponent implements OnInit {

  numero: number;
  arrNumeros = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
