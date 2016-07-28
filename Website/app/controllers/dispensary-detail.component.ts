import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Dispensary } from '../models/dispensary';
import { Product } from '../models/product';

@Component({
    selector: 'dispensary-detail',
    templateUrl: 'app/views/dispensary-detail.component.html',
})

export class DispensaryDetailComponent {
    @Input()
    dispensary: Dispensary;
    cost: number = 0.00;

    addToPurchase(product: Product) {
        this.cost += product.cost;
    }
    removeFromPurchase(product: Product) {
        if (this.cost - product.cost >= 0)
            this.cost -= product.cost;
    }

}
