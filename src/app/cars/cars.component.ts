import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CARROS } from '../mock-carros';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

 carro = CARROS;
  selectedCarro?: Carro;

  constructor() { }

  ngOnInit(): void {
  }
}

