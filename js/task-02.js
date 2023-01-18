const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  ingredientsItems.push(item)
})

const listIngredients = document.querySelector('#ingredients')
listIngredients.append(...ingredientsItems)
