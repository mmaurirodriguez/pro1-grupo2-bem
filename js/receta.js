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
            let categorias = dato[i].tags.join(", ");
            contenido += `<article>
                                <p>Nombre de la receta: ${dato[i].name}</p>
                                <p>Ingredientes: ${dato[i].ingredients}</p>
                                <p>Instrucciones de preparación: ${dato[i].instructions}</p>
                                <p>Tiempo de cocción: ${dato[i].cookTimeMinutes}</p>
                                <img src="${dato[i].image}" alt="">
                                <p>Categorias: ${categorias}</p>
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

