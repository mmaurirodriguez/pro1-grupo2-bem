let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");
let url = `https://dummyjson.com/recipes/tags/${idReceta}`;
let articleCategoria = document.querySelector(".article-Category");

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.recipes);
    let contenido = "";
    let recetas = data.recipes;
    for (let i = 0; i < recetas.length; i++) {
        contenido += `<article>
        <img class ="imgPlato"src="${recetas[i].image}" alt="${recetas[i].name}">
        <h2 class="nombrePlato">${recetas[i].name}</h2>
        <p class="dificultadPlato">Nivel de dificultad: ${recetas[i].difficulty}</p>
        <a class= "detalleReceta" href="./recetas.html?idReceta=${recetas[i].id}">Ver detalle</a>
        </article>`;
        
}
articleCategoria.innerHTML += contenido;
})
.catch(function(err) {
    return console.log(err);
});
