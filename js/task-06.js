const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length < 6) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.add('valid')
    }
    
})

inputEl.addEventListener('focus', (event) => {
    inputEl.classList.remove('valid', 'invalid')
})
