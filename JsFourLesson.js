'use strict';
// Задание 1.1
// es 5

function Product (name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    return this.price -= this.price * 0.25;
}
let product1 = new Product("кресло", 450);
product1.make25PercentDiscount();

alert(product1.price);

//es 6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price -= this.price * 0.25;
    }

}

let product2 = new Product("Монитор", 7000);
product2.make25PercentDiscount();
alert(product2.price);



//Задание 1.2
//es 5

function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text1) {
    return this.text = text1;
}

function AttachedPost (author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    return this.highlighted = true;
}
let attPost = new AttachedPost("kriss", "i like it", '21/01/22');
attPost.makeTextHighlighted();
attPost.edit("sadasdasd");
console.log(attPost);


//es 6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text1)   {
        return this.text = text1;
    }
}
class AttachedPost extends Post{
    constructor(author, text, date ) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted () {
        return this.highlighted = true;
    }
}

let attPost1 = new AttachedPost("Ваня", "JS- супер", "01/02/2021");
attPost1.edit("JS - класс");
attPost1.makeTextHighlighted();
console.log(attPost1);