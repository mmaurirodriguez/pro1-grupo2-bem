let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let listaRecetas = document.querySelector(".recetas-section");
let cargarMasBtn = document.querySelector(".cargar-mas")
let skip = 0;

const URL = "https://dummyjson.com/recipes?limit=10&skip="+ skip;

function cargarMasrecetas(url) {
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(results) {
        console.log(results);
        let dato = results.recipes;
        let contenido = "";
        for (let i = 0; i < dato.length; i++) {
            contenido += `<article>
                                <p class="tituloReceta">Nombre de la receta: ${dato[i].name}</p>
                                <p class="ingrReceta">Ingredientes: ${dato[i].ingredients}</p>
                                <p class="instrReceta">Instrucciones de preparación: ${dato[i].instructions}</p>
                                <p class="tiempCoccRecetas">Tiempo de cocción: ${dato[i].cookTimeMinutes}</p>
                                <img class="imgRecetas" src="${dato[i].image}" alt="">
                                <p class="categRecetas">Categorias:<a href="./categories.html?idReceta=${dato[i].tags}">${dato[i].tags}</a></p>
                            </article>`;
    }
    listaRecetas.innerHTML += contenido; 
})
.catch(function(err) {
    return console.log(err);
});
}
//boton cargar mas//
cargarMasrecetas(URL);
cargarMasBtn.addEventListener("click", function() {
    skip += 10;
    let url = "https://dummyjson.com/recipes?limit=10&skip=" + skip;
    cargarMasrecetas(url); // Cargar recetas adicionales
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

