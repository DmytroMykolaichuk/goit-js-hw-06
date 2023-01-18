function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes')

let newDiv = '';
let resultValue = 0

valueEl.addEventListener('input', () => {
  resultValue = +valueEl.value;
})
valueEl.addEventListener('focus', () => {
  boxesEl.innerHTML = '';
  newDiv = '';
})


btnCreateEl.addEventListener('click', () => {
  
  for (let i = 1; i <= resultValue; i += 1){
    newDiv += `<div  width ="${20 + (i * 10)}" height ="${20 + (i * 10)}" style ="background-color: ${getRandomHexColor()};" ></div>`
    console.log(newDiv)
  }
  boxesEl.insertAdjacentHTML("afterbegin", newDiv);
  valueEl.value = null;
})

btnDestroyEl.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
