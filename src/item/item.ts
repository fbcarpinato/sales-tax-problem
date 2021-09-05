import { ItemCategory } from '../item-category/item-category';
import { ItemCategoryFinder } from '../item-category/item-category-finder';
import { ItemTaxCalculator } from '../tax/item-tax-calculator';

export class Item {
  constructor(
    private label: string,
    private quantity: number,
    private price: number
  ) {}

  getLabel(): string {
    return this.label.replace('imported', '').replace(/\s+/g, ' ').trim();
  }

  getQuantity(): number {
    return this.quantity;
  }

  getUnitPrice(): number {
    return this.price;
  }

  isImported(): boolean {
    return this.label.includes('imported');
  }

  getTax(): number {
    return new ItemTaxCalculator().calculate(this) * this.getQuantity();
  }

  getCategory(): ItemCategory {
    return new ItemCategoryFinder().find(this);
  }

  getTotalPrice(): number {
    return this.getUnitPrice() * this.getQuantity() + this.getTax();
  }

  toString(): string {
    const totalPrice = this.getTotalPrice().toFixed(2);

    const imported = this.isImported() ? ' imported ' : ' ';

    return `${this.getQuantity()}${imported}${this.getLabel()}: ${totalPrice}`;
  }
}
