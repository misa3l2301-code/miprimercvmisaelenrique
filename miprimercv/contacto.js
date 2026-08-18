/* Vamos a capturar el "EVENTO" cuando se presione el botón de "ENVIAR". Para eso necesitamos escuchar todo el tiempo al documento (DOM). Debemos de prevenir que se recargue la página cuando se se envíe el form, capturar el nombre del usuario y mostrarlo en un cartelito de alerta (alert). Al final de todo, limpiamos el formulario para que quede vacío para una nueva interacción. */
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombreUsuario = document.getElementById('nombre').value;
        alert("¡Graciassss " + nombreUsuario + " por escribir! Te contestaré a la brevedad :D");
        formulario.reset();
    });
});