document.getElementById('FormReg').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');

    emailError.textContent = '';
    passwordError.textContent = '';

    let valid = true; // Bandera para validar

    // Validar email
    if (!email) {
        emailError.textContent = 'Complete el campo por favor';
        valid = false;
    }

    // Validar contraseña
    if (!password) {
        passwordError.textContent = 'Complete el campo por favor';
        valid = false;
    }
    if (valid) {
        window.location.href = 'login.html';
    }
});
