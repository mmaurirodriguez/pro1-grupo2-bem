let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let listaCategorias = document.querySelector(".listadoCategorias");
let listaRecetas = document.querySelector(".recetasSec");
let cargarMasBtn = document.querySelector(".cargar-mas")
let skip = 0;

//APIS E INFO//
const URL = "https://dummyjson.com/recipes/tags?limit=10&skip=" + skip;
function cargarMasrecetas(url) {
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(results) {
        console.log(results);
        let dato = results;
        let contenido = "";
        let tagsParaMostrar = dato.slice(skip, skip + 10);

        for (let i = 0; i < tagsParaMostrar.length; i++) {
            contenido += `<li class=listadoCategories><a class="aReceta" href="./category.html?idReceta=${tagsParaMostrar[i]}">${tagsParaMostrar[i]}</a></li>`;
        }
        listaRecetas.innerHTML += contenido;  // Esto va después del bucle
})
.catch(function(err) {
    console.log(err);
});
}
//boton cargar mas//
cargarMasrecetas(URL);
cargarMasBtn.addEventListener("click", function() {
    skip += 10;
    const url = "https://dummyjson.com/recipes/tags?limit=10&skip=" + skip;
    cargarMasrecetas(url); // 
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

