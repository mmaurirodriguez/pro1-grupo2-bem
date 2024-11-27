let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscadorSearch = qsObj.get("buscador");
let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");


let url = `https://dummyjson.com/recipes/search?q=${buscadorSearch}`


fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    let busqueda = document.querySelector(".resultadosBusqueda");
    let mensaje = document.querySelector(".resultadosMensaje");
    let dato = results.recipes;
    let resultados = "";
   
    mensaje.innerText = `Resultados de la búsqueda para: "${buscadorSearch}"`;
    for (let i = 0; i < dato.length; i++) {
        resultados += `<article class="articleIndex">
                            <img class="imgPlato" src="${dato[i].image}" alt="">
                            <p class="nombrePlato">${dato[i].name}</p>
                            <p class="dificultadPlato">Nivel de dificultad: ${dato[i].difficulty}</p>
                            <p class="detallePlato"><a class="detallePlatoA" href="./receta.html?idReceta=${dato[i].id}">Ver más</a></p>
                        </article>`;


    }
if (resultados === ""){
    resultados = `<p class="sinResultados">No se encontraron resultados para tu búsqueda</p>`
}
busqueda.innerHTML = resultados;
})


.catch(function(err) {
    return console.log(err);
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
