const inputEl = document.querySelector('input[data-length="6"]')

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === +inputEl.dataset.length) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add('invalid')
    }
    
})

inputEl.addEventListener('focus', (event) => {
    inputEl.classList.remove('valid', 'invalid')
})
