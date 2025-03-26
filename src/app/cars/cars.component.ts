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

  pageSize = 3;
  currentPage = 0;

  get paginatedCars() {
    const start = this.currentPage * this.pageSize;
    return this.carro.slice(start, start + this.pageSize);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.carro.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
} 



