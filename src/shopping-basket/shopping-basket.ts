import { Item } from '../item/item';

export class ShoppingBasket {
  constructor(private items: Item[]) {}

  getItems(): Item[] {
    return this.items;
  }
}
