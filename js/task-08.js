const refs={
    inputEmail:  document.querySelector('[name="email"]'),
    inputPass:  document.querySelector('[name="password"]'),
    loginForm: document.querySelector('.login-form'),
}
refs.loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
    event.preventDefault();
    if (refs.inputEmail.value === '' || refs.inputPass.value === '') {
        alert('Заповніть поле');
    } else {
        const formElements = event.currentTarget.elements;
        const mail = formElements.email.value;
        const password = formElements.password.value;
        const formData = { mail, password };
        console.log(formData);
        event.currentTarget.reset();
    };
}
