let counterValue = 0;
const valueEl = document.querySelector('#value')

const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
decrementBtnEl.addEventListener('click', decrementBtnClick );
function decrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
} 

const incrementBtnEl = document.querySelector('button[data-action="increment"]')
incrementBtnEl.addEventListener('click', incrementBtnClick );
function incrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
} 



