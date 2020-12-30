// 1 задание

/*var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 переменная а инкрементирована
d = b++; alert(d);           // 1 так как знак инкрементирования стоит после  переменной b, выводится изначальное значение переменной
c = (2+ ++a); alert(c);      // 5 a инкрементирована второй раз, поэтому 2+3 = 5
d = (2+ b++); alert(d);      // 4 знак инкременты стоит после b, поэтому в выражении используется предыдущее значение
alert(a);                    // 3 перемнная инкрементированна 2 раза
alert(b);                    // 3 перемнная инкрементированна 2 раза

// 2 задание

var r = 2;
var x = 1 + (r *= 2); //выражение  a *= 2 эквивалентно a = a * 2 =>  x=5;

alert(x);*/


// 3 задание

/* let f = 3;
let g = 9;

if (f >= 0 && g >= 0) {
    alert(f - g);
} else if(f < 0 && g < 0) {
    alert(f * g);
} else if ((f < 0 && g >= 0) || (f >= 0 && g < 0 )) {
    alert(f + g);
}

// 4 Задание

let f = 10;
alert(f);
++f;

switch (f) {
    case f:
        alert(f);
        ++f;
    case f:
        alert(f);
        ++f
    case f:
        alert(f);
        ++f;
    case f:
        alert(f);
        ++f
    case f:
        alert(f);
        ++f;
}

// 5 и 6 Задание

function sumNumber (a, b) {
    return a += b;
}

function differNumber (a, b) {
    return a -= b;
}

function productNumber (a, b) {
    return a += b;
}

function divideNumber (a, b) {
    return a /= b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'сумма':
            return sumNumber(a, b);

        case 'разница':
            return differNumber(a, b);

        case 'произведение':
            return productNumber(a, b);

        case 'частное':
            return divideNumber(a, b);

        default :
            alert("неизвестное действие")
            break;
    }
}
let a = prompt("введите первое число");
let b = prompt('введите второе число');

let operation = prompt("выберите одно из четырех действий(сумма, разница, произведение, частное)");

let c = mathOperation(1,2,  operation);

alert (c);

// 7 задание

null == 0; //взвращает false так как согласно специфиации задано как стандартное значение при ситуциях отличных от тех, которые указаны в спецификации.
null >= 0; //возвращает true, так как сравнения использует метод от противного, т.е. так как null < 0 принимает значение false, следовательно null >= 0 примет значение true.

 */

// 8 задание

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

alert (power(5, 10));