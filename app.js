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