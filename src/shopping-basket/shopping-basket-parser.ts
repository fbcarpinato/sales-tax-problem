import { ItemParser } from '../item/item-parser';
import { ShoppingBasket } from './shopping-basket';

export class ShoppingBasketParser {
  parse(shoppingBasket: string): ShoppingBasket {
    const rawItems = shoppingBasket.split('\n').filter((item) => item);

    const items = rawItems.map(new ItemParser().parse);

    return new ShoppingBasket(items);
  }
}
