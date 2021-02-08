'use strict';
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

// задание 5

let a = 'x'

for (let i = 1 ; i <= 20; i++) {
    console.log(a);
    a = 'x' + a;
}



//Задание 1 - Кубиков

for (let i = 0; i <= 10; i++) {
    if ( i === 0) {
        console.log( i + " - это ноль");
    } else if(i % 2 !== 0) {
        console.log( i + " - нечетное число ");
    } else if( i % 2 === 0) {
        console.log( i + " - это четное число");
    }

}



// ЗАдание 2 - Кубиков

const post = {
    author: "Jhon",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


//Задание 3 - Кубиков

//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (discount){
    console.log(discount.price - (discount.price/100 * 15));
})
*/

//Задание 4 - Кубиков

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []

    },
    {
        id: 10,
        price: 29,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,

    },
];
let withPhoto = products.filter(function (product){
    if("photos" in product) {
        if (product.photos.length > 0) {
            return true;
        } else {
            return false;
        }
    }


})
console.log(withPhoto);

products.sort(function (a, b){
    return a.price - b.price;

});
console.log(products);