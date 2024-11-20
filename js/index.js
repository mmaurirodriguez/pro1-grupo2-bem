let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let listaRecetas = document.querySelector(".recetas-section");

//APIS E INFO//
const URL =  "https://dummyjson.com/recipes?limit=10&skip=0";

fetch(URL)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    let dato = results.recipes;
    let contenido = "";

    for (let i = 0; i < dato.length; i++) {
        contenido += `<article>
                            <img src="${dato[i].image}" alt="">
                            <p>Nombre de la receta: ${dato[i].name}" </p>
                            <p>Nivel de dificultad: ${dato[i].difficulty}</p>
                            <p>Detalle de la receta: <a href="./receta.html?idReceta=${dato[i].id}">${dato[i].name}</a></p>

                      </article>`;

    }
    listaRecetas.innerHTML = contenido;
    
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

