'use strict';
// 1. получите все кнопки и сохраните в переменную

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {

    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;
    const  cardNode = clickedButtonEvent.target.parentNode;
    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.children[1], // здесь картинка внутри .product
        productName: cardNode.children[0], // здесь .productName, который внутри .product
        button: cardNode.children[2], // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    
    
    if (card.button.textContent === 'Подробнее') { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (card.button.textContent == 'Отмена') { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    console.log(document.getElementsByClassName('desc'))
    // 5. картинке внутри .product ставим стиль display: block
    let elDesc = document.querySelector('.desc');
    elDesc.remove();
    card.img.style.display = 'block';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его


    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.textContent = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    let randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum excepturi?'
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('desc')
    elementDiv.innerText = randomText;
    card.productName.insertAdjacentElement("beforeend", elementDiv);
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.textContent = 'Отмена';
}

let buttonEl = document.querySelectorAll('button');

buttonEl.forEach(function (element){
    element.addEventListener("click", handleClick);
})
