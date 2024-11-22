const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('searchTerm');

        document.getElementById('terminoBusqueda').textContent = searchTerm;

        const resultados = ('');// Completar

        const resultadosFiltrados = resultados.filter(result =>
            result.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const resultadosContainer = document.getElementById('resultadosContainer');
        const noResultadosContainer = document.getElementById('noResultados');

        if (resultadosFiltrados.length > 0) {
            noResultadosContainer.style.display = 'none'; 
            resultadosFiltrados.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('resultado-item');
                resultElement.innerHTML = `
                    <img src="${result.photo}" alt="${result.title}" class="resultado-img">
                    <h3 class="resultado-titulo">${result.title}</h3>
                    <a href="${result.link}" class="resultado-link">Ver más</a>
                `;
                resultadosContainer.appendChild(resultElement);
            });
        } else {
            resultadosContainer.style.display = 'none'; 
            noResultadosContainer.style.display = 'block'; 
        }
   