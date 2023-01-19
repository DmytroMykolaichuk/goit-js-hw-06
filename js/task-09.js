function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', () => {
  const backgroundColorBody = document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = backgroundColorBody;
})