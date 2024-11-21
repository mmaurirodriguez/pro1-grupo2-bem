let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

/* recuperar elementos del DOM */
let nameReceta = document.querySelector(".nameReceta");
let instReceta = document.querySelector(".instReceta");
let img = document.querySelector(".img");
let tiempCoccReceta = document.querySelector(".tiempCoccReceta");
let categoriaReceta = document.querySelector(".categoriaReceta");

let url = `https://dummyjson.com/recipes/${idReceta}`;

fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    nameReceta.innerText = `Receta: ${results.name}`
    instReceta.innerText = `Instrucciones de preparación: ${results.instructions}`
    img.src= results.image;
    tiempCoccReceta.innerText = `Tiempo de cocción: ${results.cookTimeMinutes}`
    categoriaReceta.innerHTML = `Categorias: <a href="./categories.html">${results.tags}</a>`

})
.catch(function(err) {
    return console.log(err);
});
