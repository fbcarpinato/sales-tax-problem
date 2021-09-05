import { Receipt } from '../src/receipt/receipt';

const basket = `
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
`;

describe('shopping basket 1', () => {
  it('should calculate the correct price for the 1 imported box of chocolates', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 imported box of chocolates: 10.50');
  });

  it('should calculate the correct price for the 1 imported bottle of perfume', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 imported bottle of perfume: 54.65');
  });

  it('should print the full receipt', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toBe(
      '1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.65\nSales Taxes: 7.65\nTotal: 65.15'
    );
  });
});
