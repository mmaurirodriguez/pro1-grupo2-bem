let buscador = document.querySelector(".buscador");  
let formularioBusqueda = document.querySelector(".FormBuscar");  
let formularioRegistro = document.querySelector(".FormReg");  


formularioRegistro.addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');

    emailError.textContent = '';
    passwordError.textContent = '';

    let valid = true; // validar

    // validar email
    if (!email) {
        emailError.textContent = 'Complete el campo por favor';
        valid = false;
    }

    // validarr contraseña
    if (!password) {
        passwordError.textContent = 'Complete el campo por favor';
        valid = false;
    }

    // si la validación falla --> evitar el envío
    if (!valid) {
        console.log("Formulario de registro no válido. Evitar envío.");
        event.preventDefault();  
    }
});

// formulario de búsqueda
formularioBusqueda.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let valorNombre = buscador.value;

    if (!valorNombre) {
        alert("Completa el campo vacío");
    } else if (valorNombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
    } else {
        // Si la validación pasa, enviar el formulario de búsqueda
        console.log("Formulario de búsqueda válido. Enviando formulario.");
        formularioBusqueda.submit();
    }
});
