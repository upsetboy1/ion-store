import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value, args) {
    return Math.ceil((value.regular_price - value.price) / value.regular_price * 100) + "% OFF";
  }
}
