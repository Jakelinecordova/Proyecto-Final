// Declara data en un ámbito global
let data;
let eventosContainer;
let listaCategoria;

// Realizar la llamada a la API utilizando fetch
fetch("http://localhost:3000/eventos")
    .then(response => response.json())
    .then(dataResponse => {
        data = dataResponse; // asigna el resultado de la llamada a fetch a la variable data

        // Acceder al elemento con id ""eventos-container" y modificar su contenido
        eventosContainer = document.getElementById("eventos-container");

        data.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('cards');

            card.innerHTML = `
            <img src="${evento.image}" alt="">
            <h3>${evento.clase} </h3>
            <p class="fecha"> ${evento.fecha} </p>
            <p class = "descripcion"> ${evento.description} </p>
            <button> Descubre más... </button>
        `;
            eventosContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error al obtener los datos', error));

// Realizar el filtro por categoría
const searchImput = document.getElementById('searchImput');
searchImput.addEventListener('input', function () {
    const serachTerm = this.value.toLowerCase();

    const eventosFiltrados = data.filter(evento => {
        return evento.clase.toLowerCase().includes(serachTerm);
    }

    );
    eventosContainer.innerHTML = '';
    eventosFiltrados.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('cards');

        card.innerHTML = `
        <img src="${evento.image}" alt="">
        <h3>${evento.clase} </h3>
        <p class ="fecha"> ${evento.fecha} </p>
        <p class = "descripcion"> ${evento.description} </p>
        <button> Descubre más... </button>
`;
        eventosContainer.appendChild(card);
    });

})


//lista de categorias

fetch("http://localhost:3000/eventos")
    .then(response => response.json())
    .then(dataResponse => {
        data = dataResponse; // asigna el resultado de la llamada a fetch a la variable data

        // Acceder al elemento con id ""eventos-container" y modificar su contenido
        listaCategoria = document.getElementById("listaCategoria");

        data.forEach(evento => {
            const categoria = document.createElement('li');
            categoria.innerHTML = `
           <a href="">${evento.categoria} </a>
        `;
            listaCategoria.appendChild(categoria);
        });
    })
    .catch(error => console.error('Error al obtener los datos', error));
