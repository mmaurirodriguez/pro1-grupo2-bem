// login.js
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === "") {
        alert("Por favor complete el campo email");
        return;
    }

    if (password === "") {
        alert("Por favor complete el campo contraseña");
        return;
    }

});

