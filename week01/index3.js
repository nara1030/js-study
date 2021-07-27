const fruits = [ 
    { id: 1, name: '사과', price: 100, left: 10, dc: 10 }, 
    { id: 2, name: '감', price: 400, left: 1 }, 
    { id: 3, name: '배', price: 700, left: 2, dc: 20 }
];

// name
// bought
// total
// dcamt: 할인금액
// payamt: 총금액

console.log(fruits.map(mapper));

function mapper(fruit) {
    let result = {};
    result.name = fruit.name;
    result.bought = (fruit.left >=3 ? 3 : fruit.left);
    result.total = result.bought * fruit.price;
    // result.dcamt = result.bought * (fruit.dc === undefined ? 0 : fruit.dc);
    result.dcamt = result.bought * fruit.price * (fruit.dc === undefined ? 0 : fruit.dc) / 100;
    result.payamt = result.total - result.dcamt;

    return result;
}