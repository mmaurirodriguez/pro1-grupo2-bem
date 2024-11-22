let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let listaRecetas = document.querySelector(".recetas-section");
let cargarMasBtn = document.querySelector(".cargar-mas")
let skip = 0;

//APIS E INFO//
const URL =  "https://dummyjson.com/recipes?limit=10&skip="+ skip;
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
            contenido += `<article class="articleIndex">
                                <img class="imgPlato" src="${dato[i].image}" alt="">
                                <p class="nombrePlato">Nombre de la receta: ${dato[i].name}</p>
                                <p class="dificultadPlato">Nivel de dificultad: ${dato[i].difficulty}</p>
                                <p class="detallePlato"><a href="./receta.html?idReceta=${dato[i].id}">Ver más</a>
</p>
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

