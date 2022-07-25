let buttons = document.querySelectorAll('.btn');

let reset = document.querySelector('.reset');
let rules = document.querySelector('.rules');
// hold the moves
let playerOne = [];
let playerTwo = [];
const resetBtn = (event) => {
    console.log('reset clicked');
    playerOne = [];
    playerTwo = [];
    let clicked = document.querySelectorAll('.clicked-btn');
    clicked.forEach((cBtn) => {
        cBtn.removeAttribute('disabled');
        cBtn.classList.remove('clicked-btn');
        cBtn.innerText = '';
    });
}

const modal = document.querySelector('#modal-box');

const closeModal = () => {
    modal.classList.add('hidden');
}


const showRules = () => {
    modal.classList.remove('hidden');
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
    
}

reset.addEventListener('click', resetBtn);

rules.addEventListener('click', showRules);

const checkWinner = () => {
    console.log('game ended ... checking winner !!');
}

const buttonClicked = (event) => {
    const btn = event.target;
    console.log('clicked ', event.target.id);
    const count = playerOne.length + playerTwo.length;
    if(playerOne.length === 0 || count % 2 != 1) {
        btn.innerText = 'X';
        playerOne.push(parseInt(btn.id));
    } else {
        playerTwo.push(parseInt(btn.id));
        btn.innerText = '0';
    }
    btn.setAttribute('disabled', true);
    btn.classList.add('clicked-btn');
    if(playerOne.length + playerTwo.length === 9) {
        checkWinner();
    }
}


buttons.forEach((btn) => {
    btn.addEventListener('click', buttonClicked);
})