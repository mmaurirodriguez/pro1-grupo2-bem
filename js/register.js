let formularioRegistro = document.querySelector(".FormReg");

formularioRegistro.addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terminos = document.getElementById('terminos');

    // Seleccionar mensajes de error
    const emailError = document.querySelector("#email + .span");
    const passwordError = document.querySelector("#password + .span");
    const terminosError = document.querySelector("#terminos + label + .span");

    // Ocultar errores al iniciar
    emailError.style.display = "none";
    passwordError.style.display = "none";
    terminosError.style.display = "none";

    let valid = true;

    // Validar email
    if (!email) {
        emailError.style.display = "block";
        valid = false;
    }

    // Validar contraseña
    if (!password) {
        passwordError.style.display = "block";
        valid = false;
    }

    // Validar checkbox
    if (!terminos.checked) {
        terminosError.style.display = "block";
        valid = false;
    }

    // Si alguna validación falla, evitar el envío
    if (!valid) {
        event.preventDefault();
        console.log("Formulario no válido. Corregir errores.");
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
        // si la validación pasaa, enviar el formulario de búsqueda
        console.log("Formulario de búsqueda válido. Enviando formulario.");
        formularioBusqueda.submit();
    }
});
