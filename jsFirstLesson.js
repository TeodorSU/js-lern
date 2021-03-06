// 1 задание
let tempCels = prompt("Введите температуру в цельсиях: ");

alert ("Температура в фарингейтах: " + ((9/5)*tempCels+32));

// 2 задание

let name = "Василий";
let admin = name;

alert(admin);

// 3 задание

/* 1. т.к. импользуется только оператор сложения, то выполняем действия с лева на право. складываем числа 10 и 10. результат: 20.
   2. к числу 20 прибавляем строку, происходит неявное приведение типа. при сложении числа и строки получаем строку. Результат: "2010"
 */
console.log(10 + 10 + "10");

/* 1. т.к. импользуется только оператор сложения, то выполняем действия с лева на право. К числу 10 прибавляем строку "10". Происходит неявное приведение типа. При сложениие строки и числа получаем строку. Резульат: "1010"
   2. К строке "1010" прибавляем число 10. Происходит неявное приведение типа. При сложениие строки и числа получаем строку. Результат. "101010"
 */
console.log(10 + "10" + 10);

/* 1. т.к. унарный плюс  имеет приоритет выше, чем у сложения, значит его выполняем в первую очередь. преобразуем строку "10" в число 10.
   2. складываем числа 10 и 10. результат: 20.
   3. складываем 20 и 10. Результат: 30.
 */
console.log(10 + 10 + +"10");

/* 1. о правилам численного преобразования упстая строка преобразуется в 0.
   2. унарный минус возвращает нам число с обратным знаком. РЕзультат: -0.
   3.  выполняем деление 10 на -0. Результат: - infinity.
 */
console.log(10 / -"");
/* 1. Унарный плюс пытается преобразовать строку в  число, но дробные числа в js записываются с помощью точки, следовательно "2,5"  преобразуется в NaN. Результат: NaN.
   2. Число 10 делим на NaN. Результат: NaN.
 */
console.log(10 / +"2,5");
