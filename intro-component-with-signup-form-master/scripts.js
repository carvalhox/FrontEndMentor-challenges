
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.getElementById('form');

    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    firstName === '' ? createErrorMessage('firstName', 'First Name cannot be empty') : removeErrorMessage('firstName');
    lastName === '' ? createErrorMessage('lastName', 'Last Name cannot be empty') : removeErrorMessage('lastName');
    email === '' ? createErrorMessage('email', 'Email cannot be empty') : removeErrorMessage('email');
    password === '' ? createErrorMessage('password', 'Password cannot be empty') : removeErrorMessage('password');
});

function createErrorMessage(field, message) {
    const formControl = form[field].parentNode;

    const span = formControl.querySelector('.message-error');
    span.innerHTML = message;
    const image = formControl.querySelector('.icon-error');
    image.style.opacity = 1;
}

function removeErrorMessage(field) {
    const formControl = form[field].parentNode;
    const span = formControl.querySelector('.message-error');
    span.innerHTML = '';
    const image = formControl.querySelector('.icon-error');
    image.style.opacity = 0;
}
