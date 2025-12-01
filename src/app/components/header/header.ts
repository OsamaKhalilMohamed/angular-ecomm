import { Component } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-gray-100 shadow-md p-4 sticky top-0 flex justify-between items-center">
      <h1 class="font-bold">Shop</h1>
      <app-primary-button label="Cart" (btnClicked)="handleCheckoutClick()" />
    </div>
  `,
  styles: ``,
})
export class Header {
  handleCheckoutClick() {
    console.log('Checkout clicked!');
  }
}
