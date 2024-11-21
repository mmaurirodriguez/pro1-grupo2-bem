let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let listaCategorias = document.querySelector(".listadoCategorias");
let listaRecetas = document.querySelector(".recetas-section");
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
                    contenido += `<li><a href="./category.html">${tagsParaMostrar[i]}</a></li>`;
                }
                listaRecetas.innerHTML += contenido;
            })
            .catch(function(err) {
                console.log(err);
            }); 
    }