import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCard: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }

];

// Tax = 0.15
const [total, tax ] = taxCalculation({
    products: shoppingCard,
    tax: 0.15,
});

console.log('Total ', total);
console.log('Tax', tax);
