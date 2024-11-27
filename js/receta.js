let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");
let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");

let nameReceta = document.querySelector(".nameReceta");
let instReceta = document.querySelector(".instReceta");
let imgReceta = document.querySelector(".imgReceta");
let tiempCoccReceta = document.querySelector(".tiempCoccReceta");
let categoriaReceta = document.querySelector(".categoriaReceta");

let url = `https://dummyjson.com/recipes/${idReceta}`;

fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    nameReceta.innerText = `${results.name}`
    instReceta.innerText = `Instrucciones de preparación: ${results.instructions}`
    imgReceta.src= results.image;
    tiempCoccReceta.innerText = `Tiempo de cocción: ${results.cookTimeMinutes}`

    let tagsHTML = ""; 
    let tags = results.tags; 
    
    for (let i = 0; i < tags.length; i++) {
        tagsHTML += 
        `<a href="./category.html?idReceta=${tags[i]}" class="categoria-link">${tags[i]}</a>`;
        
        if (i < tags.length - 1) {
            tagsHTML += ", ";
        }
    }

    // Asignar los enlaces generados al elemento categoriaReceta
    categoriaReceta.innerHTML = `Categorías: ${tagsHTML}`;
})
.catch(function(err) {
    return console.log(err);
}); 
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

