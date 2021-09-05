import { ItemParser } from '../item/item-parser';
import { ShoppingBasket } from './shopping-basket';

export class ShoppingBasketParser {
  /**
   * Parses a raw string of a shopping basket and turns it into a concrete ShoppingBasket.
   */
  parse(shoppingBasket: string): ShoppingBasket {
    const rawItems = shoppingBasket.split('\n').filter((item) => item);

    const items = rawItems.map(new ItemParser().parse);

    return new ShoppingBasket(items);
  }
}
