import { Product } from './interfaces';

abstract class ProductBase implements Product {
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('Not implemented.');
  }
}
export class FoodProduct extends ProductBase {
  id = 0;
  name = '';
  icon = '';

  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

class SportingProduct extends ProductBase {
  constructor(public id: number, public name: string, public icon: string) {
    super(id, name, icon);
  }

  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}
let fp = new FoodProduct(1, 'pineapple', 'pine-apple.jpg');
fp.id = 1;

fp.icon;
