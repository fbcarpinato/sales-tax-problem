import { Receipt } from '../src/receipt/receipt';

const basket1 = `2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;

const basket2 = `1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50`;

const basket3 = `1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
3 box of imported chocolates at 11.25`;

console.log('Input 1:');
console.log(basket1);
console.log('\n');
console.log('Output 1:');
console.log(Receipt.createFromRawShoppingBasket(basket1).toString());
console.log('\n');

console.log('Input 2:');
console.log(basket2);
console.log('\n');
console.log('Output 2:');
console.log(Receipt.createFromRawShoppingBasket(basket2).toString());
console.log('\n');

console.log('Input 3:');
console.log(basket3);
console.log('\n');
console.log('Output 3:');
console.log(Receipt.createFromRawShoppingBasket(basket3).toString());
