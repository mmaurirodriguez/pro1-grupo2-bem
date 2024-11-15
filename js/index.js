fetch('https://dummyjson.com/recipes/meal-type/snack')
.then(res => res.json())
.then(console.log);

const URL =  "https://dummyjson.com/recipes/meal-type/snack";
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
