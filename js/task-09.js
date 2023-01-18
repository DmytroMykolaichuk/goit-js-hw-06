function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
})