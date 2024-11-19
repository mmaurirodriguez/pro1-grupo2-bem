/*const URL =  "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image";
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
});*/
let formulario = document.querySelector("form");
let campoBuscar = document.querySelector(".buscar");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (campoBuscar.value == ""){
        alert("Completá el campo. No puede estar vacío")
    }
    else if(campoBuscar.value.length < 4) {
            alert("Debes ingresar una palabra mayor a 3 caracteres")
    }
    else{
        formulario.submit()
    }
})
/*arreglar, no me funciona*/
