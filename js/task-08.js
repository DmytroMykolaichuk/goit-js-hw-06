const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
    }

    const result = {
        email: email.value,
        password: password.value,
    }
    console.log(result)

    event.currentTarget.reset();
})
