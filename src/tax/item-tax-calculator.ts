import { Item } from '../item/item';

export class ItemTaxCalculator {
  calculate(item: Item): number {
    const basicTax = item.getCategory() === 'generic' ? 10 : 0;

    const importedTax = item.isImported() ? 5 : 0;

    const calculatedTax =
      ((basicTax + importedTax) * item.getUnitPrice()) / 100;

    const roundedCalculatedTax = Math.ceil(calculatedTax * 20) / 20;

    return roundedCalculatedTax;
  }
}
