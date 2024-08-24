import { Component, effect, EventEmitter, input, Input, OnInit, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [ ProductCardComponent ]
})
export class ProductCardComponent {

  // @Input({
  //   required: true,
  // })
  // public product!: Product;

  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  })

}
