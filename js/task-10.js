function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes')


btnCreateEl.addEventListener('click', () => {
  const newAllDiv = [];
  let sizes = 30;
  for (let i = 1; i <= +valueEl.value; i += 1){
    const newDiv = document.createElement('div');
    newDiv.style.width = `${sizes}px`;
    newDiv.style.height = `${sizes}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.marginBottom = `${10}px`;
    newAllDiv.push(newDiv)
    sizes += 10;
  }
  boxesEl.append(...newAllDiv);
  valueEl.value = null;
})

btnDestroyEl.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
