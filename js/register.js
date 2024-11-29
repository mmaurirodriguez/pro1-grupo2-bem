let formularioRegistro = document.querySelector(".FormReg");

formularioRegistro.addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terminos = document.getElementById('terminos');

    const emailError = document.querySelector("#email + .span");
    const passwordError = document.querySelector("#password + .span");
    const terminosError = document.querySelector("#terminos + label + .span");

    emailError.style.display = "none";
    passwordError.style.display = "none";
    terminosError.style.display = "none";

    let valid = true;

    if (!email) {
        emailError.style.display = "block";
        valid = false;
    }

    if (!password) {
        passwordError.style.display = "block";
        valid = false;
    }

    if (!terminos.checked) {
        terminosError.style.display = "block";
        valid = false;
    }

    
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
        console.log("Formulario de búsqueda válido. Enviando formulario.");
        formularioBusqueda.submit();
    }
});
