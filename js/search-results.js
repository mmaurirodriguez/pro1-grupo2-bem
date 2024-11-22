let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get("buscador");

let url = `https://dummyjson.com/recipes/search?q=${buscador}`

console.log(buscador)