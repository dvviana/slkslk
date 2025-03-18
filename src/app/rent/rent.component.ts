import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  selectedCar: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCar = {
        name: params['name'] || 'Desconhecido',
        price: params['price'] || 0
      };
    });
  }

  confirmPurchase(): void {
    alert(`Compra confirmada para o carro: ${this.selectedCar.name} por R$ ${this.selectedCar.price}`);
  }
}

