import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.models';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `<div
    class="rounded-md border border-gray-200 shadow-md flex flex-col p-4 gap-2 relative"
  >
    <p class="absolute top-5 right-5" [class]="product().stock ? 'text-green-500' : 'text-red-300'">
      @if(product().stock){
      {{ product().stock }} Left } @else{ Out of Stock }
    </p>

    <img
      class="w-60 h-60 object-contain mx-auto"
      [src]="product().image"
      alt="{{ product().title }}"
    />
    <h2 class="text-lg font-semibold mt-2">{{ product().title }}</h2>
    <p class="text-gray-600 mt-1">{{ product().price + '$' }}</p>
    <app-primary-button label="Add to Cart" width="w-full" (btnClicked)="onCardClicked()" />
  </div>`,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  cart = inject(Cart);
  onCardClicked() {
    this.cart.addToCart(this.product());
  }
}
