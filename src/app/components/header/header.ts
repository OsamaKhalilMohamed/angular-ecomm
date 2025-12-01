import { Component, inject } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
    <div class="bg-gray-100 shadow-md p-4 sticky top-0 flex justify-between items-center">
      <h1 class="font-bold text-2xl cursor-pointer" routerLink="/">Tech Store</h1>
      <app-primary-button
        [label]="'Cart (' + cart.cart().length + ')'"
        (btnClicked)="handleCheckoutClick()"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class Header {
  cart = inject(Cart);
  handleCheckoutClick() {
    console.log('Checkout clicked!');
  }
}
