// задание 4
/*let i;
for (i = 0; i < 10; console.log(i++)) {};

// задание 1

let n = 100;
let i = 1;

loop1:
while (i < n) {

    i++;
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue loop1;
    }
    alert(i);

}

// задание 3

let productBasket = new Map([
    ['product1', '2'],
    ['product2', 3],
    ['product3', 3]
    ])

function countBasketPrice() {
    let price = 0;
    let sum = 0;

    for (let value of productBasket.values()) {
        price = Number(value);
        sum += price;
    }
    return sum;
}


alert(countBasketPrice());
*/
// задание 5

let a = 'x'

for (let i = 1 ; i <= 20; i++) {
    console.log(a);
    a = 'x' + a;
}
