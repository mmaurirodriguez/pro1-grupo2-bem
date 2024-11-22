document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.loginForm'); 
    const emailInput = document.querySelector('#email'); 
    const passwordInput = document.querySelector('#password'); 

    emailInput.addEventListener('focus', function () {
        console.log('Foco en el campo email');
    });

    passwordInput.addEventListener('focus', function () {
        console.log('Foco en el campo contraseña');
    });

    emailInput.addEventListener('blur', function () {
        if (emailInput.value === '') {
            alert('El campo email no puede estar vacío');
        }
    });

    passwordInput.addEventListener('blur', function () {
        if (passwordInput.value === '') {
            alert('El campo contraseña no puede estar vacío');
        }
    });

    emailInput.addEventListener('input', function () {
        if (emailInput.value.length > 0) {
            console.log(`Email ingresado: ${emailInput.value}`);
        }
    });

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.length < 5) {
            console.log('La contraseña debe tener al menos 5 caracteres');
        }
    });

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === '') {
            alert('Por favor complete el campo email');
            return;
        }

        if (password === '') {
            alert('Por favor complete el campo contraseña');
            return;
        }

        if (password.length < 5) {
            alert('La contraseña debe tener al menos 5 caracteres');
            return;
        }

        window.location.href = 'index.html';
    });
});
