import { Receipt } from '../src/receipt/receipt';

const basket = `
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
3 box of imported chocolates at 11.25
`;

describe('shopping basket 1', () => {
  it('should calculate the correct price for the 1 imported bottle of perfume', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 imported bottle of perfume: 32.19');
  });

  it('should calculate the correct price for the 1 bottle of perfume', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 bottle of perfume: 20.89');
  });

  it('should calculate the correct price for the 1 packet of headache pills', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 packet of headache pills: 9.75');
  });

  it('should calculate the correct price for the 3 imported box of chocolates', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('3 imported box of chocolates: 35.55');
  });

  it('should print the full receipt', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toBe(
      '1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n3 imported box of chocolates: 35.55\nSales Taxes: 7.90\nTotal: 98.38'
    );
  });
});
