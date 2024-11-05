document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function (event) {
        let valid = true;
        usernameError.textContent = '';
        emailError.textContent = '';

        const usernamePattern = /^((?:\s*[A-Za-z0-9]\s*){2,60})$/;
        if (!usernamePattern.test(username.value)) {
            valid = false;
            usernameError.textContent = 'Nazwa użytkownika musi mieć od 2 do 60 znaków.';
        }

        const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            valid = false;
            emailError.textContent = 'Podaj poprawny adres e-mail.';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});