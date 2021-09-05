import { ItemCategory } from '../item-category/item-category';
import { ItemCategoryFinder } from '../item-category/item-category-finder';
import { ItemTaxCalculator } from '../tax/item-tax-calculator';

export class Item {
  constructor(
    private label: string,
    private quantity: number,
    private price: number
  ) {}

  /**
   * Returns the label of the item.
   */
  getLabel(): string {
    return this.label.replace('imported', '').replace(/\s+/g, ' ').trim();
  }

  /**
   * Returns the quantity of the item.
   */
  getQuantity(): number {
    return this.quantity;
  }

  /**
   * Returns the unit price of the item.
   */
  getUnitPrice(): number {
    return this.price;
  }

  /**
   * Determines if the item is imported.
   */
  isImported(): boolean {
    return this.label.includes('imported');
  }

  /**
   * Returns the total amount of taxes of the item.
   */
  getTax(): number {
    return new ItemTaxCalculator().calculate(this) * this.getQuantity();
  }

  /**
   * Returns the category of the item.
   */
  getCategory(): ItemCategory {
    return new ItemCategoryFinder().find(this);
  }

  /**
   * Returns the total price of the item including taxes.
   */
  getTotalPrice(): number {
    return this.getUnitPrice() * this.getQuantity() + this.getTax();
  }

  /**
   * Returns the stringified version of the item.
   */
  toString(): string {
    const totalPrice = this.getTotalPrice().toFixed(2);

    const imported = this.isImported() ? ' imported ' : ' ';

    return `${this.getQuantity()}${imported}${this.getLabel()}: ${totalPrice}`;
  }
}
