import { Receipt } from '../src/receipt/receipt';

const basket = `
2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
`;

describe('shopping basket 1', () => {
  it('should calculate the correct price for the 2 books', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('2 book: 24.98');
  });

  it('should calculate the correct price for the 1 music CD', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 music CD: 16.49');
  });

  it('should calculate the correct price for the 1 chocolate bar', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toContain('1 chocolate bar: 0.85');
  });

  it('should print the full receipt', () => {
    const receipt = Receipt.createFromRawShoppingBasket(basket);

    expect(receipt.toString()).toBe(
      '2 book: 24.98\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 42.32'
    );
  });
});
