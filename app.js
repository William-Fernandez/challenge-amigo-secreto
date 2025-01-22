// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Captura el valor del input
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar si el input está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    listaDeAmigos.push(nombre);

    // Limpiar el campo de texto
    inputAmigo.value = "";

    // Actualizar la lista visible
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista para evitar duplicados en el DOM
    listaHTML.innerHTML = "";

    // Crear elementos <li> para cada amigo
    listaDeAmigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${amigo}`;
        listaHTML.appendChild(listItem);
    });
}
// Función para sortear un amigo
function sortearAmigo() {
    // Validar si hay nombres en la lista
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}
