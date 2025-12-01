import { Component, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  template: `
    <div class="flex flex-col gap-4 p-4 m-4">
      <h1>Cart Items</h1>

      @if(cartInstance.cart().length === 0){
      <p>Your cart is empty.</p>
      } @else{ @for(product of cartInstance.cart(); track product.id){
      <div class="border border-gray-300 rounded-md p-4 justify-between flex gap-4 items-center">
        {{ product.title }} - {{ product.price + '$' }}

        <button
          class="text-red-500 font-bold cursor-pointer"
          (click)="handleRemoveFromCart(product.id)"
        >
          remove
        </button>
      </div>
      } }
    </div>
  `,
  styles: ``,
})
export class Cart {
  cartInstance = inject(CartService);

  handleRemoveFromCart(productId: number) {
    this.cartInstance.removeFromCart(productId);
  }
}
