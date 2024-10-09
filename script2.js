
// Evento de clic en botones de enlace para abrir en una nueva pestaña
document.querySelectorAll('.btn.btn-primary').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
        var url = this.href;  // Obtener la URL del enlace
        window.open(url, '_blank');  // Abrir la URL en una nueva pestaña
    });
});

// Esconder el menú cuando se hace clic en un enlace (modo móvil)
$(document).ready(function () {
    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide'); // Contrae el menú
    });
});


