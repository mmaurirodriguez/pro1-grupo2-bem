let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");

//APIS E INFO//
const URL =  "https://dummyjson.com/recipes?limit=10&skip=0&select=name,image";
let listado = document.querySelector(".recetas");

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    const recetas = data.recipes;
})
.catch(function(err) {
    return console.log(err);
    ;
});

//BUSCADOR FORMULARIO//
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let valorNombre = buscador.value;

    if (!valorNombre) {
        alert("Debes completar el campo nombre");
    } else if (valorNombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
    } else {
        formulario.submit();
    }
});

