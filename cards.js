// Declara data en un ámbito global
let data;
let eventosContainer;
let listaCategoria;

// Realizar la llamada a la API utilizando fetch
fetch("http://localhost:3000/eventos")
    .then(response => response.json())
    .then(dataResponse => {
        data = dataResponse; // asigna el resultado de la llamada a fetch a la variable data

        // Acceder al elemento con id "eventos-container" y modificar su contenido
        eventosContainer = document.getElementById("eventos-container");

        data.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('cards');

            card.innerHTML = `
            <img src="${evento.image}" alt="">
            <h3>${evento.clase} </h3>
            <p class="fecha"> ${evento.fecha} </p>
            <p class="descripcion"> ${evento.description} </p>
            <button> Descubre más... </button>
        `;
            eventosContainer.appendChild(card);
        });

        // Crear una lista de categorías sin repeticiones
        const categoriasUnicas = Array.from(new Set(data.map(evento => evento.categoria)));
        listaCategoria = document.getElementById("listaCategoria");

        categoriasUnicas.forEach(categoria => {
            const elementoCategoria = document.createElement('li');
            elementoCategoria.innerHTML = `
               <a href="">${categoria}</a>
            `;
            listaCategoria.appendChild(elementoCategoria);
        });
    })
    .catch(error => console.error('Error al obtener los datos', error));

// Realizar el filtro por categoría
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    const eventosFiltrados = data.filter(evento => {
        return evento.clase.toLowerCase().includes(searchTerm);
    });

    eventosContainer.innerHTML = '';
    eventosFiltrados.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('cards');

        card.innerHTML = `
        <img src="${evento.image}" alt="">
        <h3>${evento.clase} </h3>
        <p class="fecha"> ${evento.fecha} </p>
        <p class="descripcion"> ${evento.description} </p>
        <button> Descubre más... </button>
        `;
        eventosContainer.appendChild(card);
    });
});