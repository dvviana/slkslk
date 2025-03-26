import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmPurchaseComponent } from '../confirm-purchase/confirm-purchase/confirm-purchase.component';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  selectedCar: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCar = {
        name: params['name'] || 'Desconhecido',
        price: params['price'] || 0
      };
    });
  }

  confirmPurchase(): void {
   ;
  this.router.navigate(['/confirm-purchase'], { queryParams: { name: this.selectedCar.name, price: this.selectedCar.price } });
  }
}

