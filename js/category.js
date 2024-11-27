let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");
let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let url = `https://dummyjson.com/recipes/tag/${idReceta}`;
let sectionCategoria = document.querySelector(".section2Category");

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.recipes);
    let contenido = "";
    let recetas = data.recipes;
    for (let i = 0; i < recetas.length; i++) {
        contenido += `<article class="articleIndex">
            <img class ="imgPlato"src="${recetas[i].image}" alt="${recetas[i].name}">
        <h2 class="nombrePlato">${recetas[i].name}</h2>
        <p class="dificultadPlato">Nivel de dificultad: ${recetas[i].difficulty}</p>
        <a class= "detalleReceta" href="./receta.html?idReceta=${recetas[i].id}">Ver detalle</a>
        </article>`;     
}
sectionCategoria.innerHTML += contenido;
})
.catch(function(err) {
    return console.log(err);
});

//BUSCADOR FORMULARIO//
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let valorNombre = buscador.value;

    if (!valorNombre) {
        alert("Completa el campo vacío");
    } else if (valorNombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
    } else {
        formulario.submit();
    }
});
