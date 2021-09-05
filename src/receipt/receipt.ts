import { ShoppingBasket } from '../shopping-basket/shopping-basket';
import { ShoppingBasketParser } from '../shopping-basket/shopping-basket-parser';

export class Receipt {
  private constructor(private shoppingBasket: ShoppingBasket) {}

  static createFromRawShoppingBasket(rawShoppingBasket: string): Receipt {
    const shoppingBasket = new ShoppingBasketParser().parse(rawShoppingBasket);

    return new Receipt(shoppingBasket);
  }

  toString(): string {
    const items = this.shoppingBasket.getItems();

    const totalSalesTax = items
      .reduce((total, item) => (total += item.getTax()), 0)
      .toFixed(2);

    const total = items
      .reduce((total, item) => (total += item.getTotalPrice()), 0)
      .toFixed(2);

    return [
      ...items.map((item) => item.toString()),
      `Sales Taxes: ${totalSalesTax}`,
      `Total: ${total}`,
    ].join('\n');
  }
}
