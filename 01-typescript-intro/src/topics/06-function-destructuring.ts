export interface Product {
    description:string;
    price: number;
}

// const phone: Product = {
//     description:'Nokia A1',
//     price: 150000.00
// }


// const { price} = phone;

// console.log('El precio del celular es: ', price);

// const tablet: Product = {
//     description:'iPad Air',
//     price: 250000.00
// }

// const { price:anotherPrice } = tablet;

// console.log('El precio de la tablet es: ', anotherPrice)

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options:TaxCalculationOptions ):[number, number]{
    
    const { tax, products} = options;

    let total = 0;
    
    products.forEach(({price}) => {
        total += price;
    })
    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, taxTotal] = taxCalculation({
//     products:shoppingCart,
//     tax,
// });

// console.log('Total ', total);
// console.log('Tax ', taxTotal);