import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.models';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  template: `<div class="p-4 grid grid-cols-3 gap-6 m-6">
    @for(product of products(); track product.id){
    <app-product-card [product]="product" />
    }
  </div>`,
  styles: ``,
})
export class ProductList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'iPhone',
      price: 10.99,
      image: 'https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png',
      stock: 5,
    },
    {
      id: 2,
      title: 'iPad',
      price: 15.99,
      image:
        'https://w7.pngwing.com/pngs/767/151/png-transparent-ipad-2-ipad-3-apple-ipad-electronics-gadget-retina-display.png',
      stock: 3,
    },
    {
      id: 3,
      title: 'MacBook',
      price: 7.99,
      image: 'https://pngimg.com/uploads/macbook/macbook_PNG52.png',
    },
    {
      id: 4,
      title: 'iPhone',
      price: 10.99,
      image: 'https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png',
      stock: 5,
    },
    {
      id: 5,
      title: 'iPad',
      price: 15.99,
      image:
        'https://w7.pngwing.com/pngs/767/151/png-transparent-ipad-2-ipad-3-apple-ipad-electronics-gadget-retina-display.png',
      stock: 3,
    },
    {
      id: 6,
      title: 'MacBook',
      price: 7.99,
      image: 'https://pngimg.com/uploads/macbook/macbook_PNG52.png',
    },
  ]);
}
