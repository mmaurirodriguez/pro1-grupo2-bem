const URL =  "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image";
let listado = document.querySelector(".recetas");

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    const recetas = data.recipes;
})
.catch(function(err) {
    return console.log(err);
    ;
});
