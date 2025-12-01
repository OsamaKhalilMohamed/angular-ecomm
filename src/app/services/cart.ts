import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Array<Product>>([]);

  addToCart(product: Product) {
    const currentCart = this.cart();
    const item = currentCart.find((item) => item.id === product.id);
    if (item !== undefined) {
      this.cart.set([...currentCart]);
    } else {
      this.cart.set([...currentCart, { ...product }]);
    }
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart();
    const item = currentCart.find((item) => item.id === productId);
    if (item !== undefined) {
      const updatedCart = currentCart.filter((item) => item.id !== productId);
      this.cart.set(updatedCart);
    }
  }
}
