let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

let nameReceta = document.querySelector(".nameReceta");
let instReceta = document.querySelector(".instReceta");
let imgPlato = document.querySelector(".imgPlato");
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
    imgPlato.src= results.image;
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

