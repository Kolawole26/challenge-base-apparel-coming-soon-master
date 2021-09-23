const form = document.querySelector('.myForm');
const input = document.querySelector('#email');
const submit = document.querySelector('#submit');
const errorMsg = document.querySelector('.error-msg');

const emailValidation = (event) => {

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value == "") {
        form.classList.add('invalid');
        errorMsg.innerHTML = "Email Address cannot be empty";
    }

    else if (!validEmail.test(input.value)) {
        form.classList.add('invalid');
        errorMsg.innerHTML = "Please provide a valid email";
    }

    else {
        form.classList.remove('invalid');
        form.classList.add('valid');
        errorMsg.innerHTML = "";
        
    }
};

submit.addEventListener('click', emailValidation);