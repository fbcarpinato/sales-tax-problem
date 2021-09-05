import { Item } from '../item/item';

export class ShoppingBasket {
  constructor(private items: Item[]) {}

  /**
   * Returns the list of the items inside in this shopping basket.
   */
  getItems(): Item[] {
    return this.items;
  }
}
