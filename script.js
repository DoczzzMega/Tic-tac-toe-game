'use strict';

const area = document.getElementById('area');
let move = 0;


const contentResult = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('modal-overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', function (event) {
    if (!event.target.innerHTML) {
        move % 2 == 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        move++;
        check();

    }
});

const check = () => {
    const boxes = document.querySelectorAll('.box');
    let result = '';
    const arrWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let item of arrWin) {
        if (boxes[item[0]].innerHTML == 'X' && boxes[item[1]].innerHTML == 'X' && boxes[item[2]].innerHTML == 'X') {
            result = 'крестики';
            prepareResult(result);
        } else if (boxes[item[0]].innerHTML == 'O' && boxes[item[1]].innerHTML == 'O' && boxes[item[2]].innerHTML == 'O') {
            result = 'нолики';
            prepareResult(result);
        }
    }
    if (hasEmptyBox() && result == '') {
        result = 'Ничья';
        prepareResult2(result);
    }
};

const prepareResult = winner => {
    contentResult.innerHTML = `Победили ${winner}!`;
    modalResult.style.display = 'block';
};

const prepareResult2 = winner => {
    contentResult.innerHTML = `${winner}!`;
    modalResult.style.display = 'block';
};

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);


const hasEmptyBox = () => {
    const boxes = document.querySelectorAll('.box');
    for (let item of boxes) {
        if (!item.innerHTML) {
            return false;
        }
    }
    return true;

};
