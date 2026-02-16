const smartphones = [
    {
        brand : 'nothing',
        model : 'phone 2',
        price : 50000,
        colors : ['black', 'white', 'blue']
    },
    {
        brand : 'oneplus',
        model : '13R',
        price : 40000,
        colors : ['red', 'black', 'blue']
    },
    {
        brand : 'vivo',
        model : 'T2 PRO',
        price : 25000,
        colors : ['silver', 'blue']
    },
    {
        brand : 'samsung',
        model : 'J7',
        price : 15000,
        colors : ['black', 'gold']
    },
];

const brand = smartphones.map((phone) => {
    return phone.brand;
});

console.log(brand);

// create array of all pricres

const price = smartphones.map((phone) => {
    return phone.price;
});

console.log(price);

// filter

const budgetphones = smartphones.filter((phone) => {
    return phone.price < 30000;
});

console.log(budgetphones);

// includes method

const blackcolors = smartphones.filter((phone) => {
    return phone.colors.includes('black');
});

console.log(blackcolors);

// NaN or NULL

console.log( typeof NaN );
console.log( undefined + 1 );

console.log( 1 == '1' );
console.log( 1 === '1' );
console.log( 1 === 1 );

console.log( 1 + '1' );
console.log( 1 + '1' + 1 );
console.log( 1 + 1 + '1' );
console.log( 1 + 1 + 'abc' );