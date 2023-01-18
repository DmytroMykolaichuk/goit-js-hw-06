// 1.
// const list = document.querySelector('#categories');
// const numberOfCategories = list.querySelectorAll('.item');
// console.log('Number of categories:', numberOfCategories.length)

const numberOfCategories = document.querySelector('#categories').querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

// 2.
// console.log(numberOfCategories)
numberOfCategories.forEach(li => {
    const title = li.querySelector('h2');
    const numberOfElements = li.querySelectorAll('ul > li');
    console.log('Category:', title.textContent);
    console.log('Elements:', numberOfElements.length);
});
