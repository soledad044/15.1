document.addEventListener("DOMContentLoaded", function () {
    const contenidoInicio = document.getElementById("homeContent");
    const contenidoGeneraciones = document.getElementById("generationContent");
    const contenidoImagenes = document.getElementById("allImages");
    const menuOpciones = document.getElementById("optionsMenu");
    const optionsBtn = document.getElementById("optionsBtn"); 
    const showImagesBtn = document.getElementById("showImagesBtn"); 
    const homeLink = document.getElementById("homeLink"); 
    const searchInput = document.getElementById("searchInput"); // Campo de búsqueda.

    // Función para mostrar solo el contenido deseado
    function mostrarContenido(contenidoAmostrar) {
        contenidoInicio.classList.add("d-none");
        contenidoGeneraciones.classList.add("d-none");
        contenidoImagenes.classList.add("d-none");
        menuOpciones.classList.add("d-none"); // Ocultar menú de de generaciones por defecto.

        contenidoAmostrar.classList.remove("d-none");
    }

    // Mostrar contenido de inicio
    homeLink.addEventListener("click", function () {
        mostrarContenido(contenidoInicio);
        menuOpciones.classList.add("d-none"); // Se asegura de ocultar el menú de generaciones, me trajo bastante dificultad.
    });

    // Mostrar secciones de generaciones
    optionsBtn.addEventListener("click", function () {
        mostrarContenido(contenidoGeneraciones);
        menuOpciones.classList.remove("d-none"); // Mostrar lista de generaciones.
    });

    // Mostrar imágenes
    showImagesBtn.addEventListener("click", function () {
        mostrarContenido(contenidoImagenes);
        menuOpciones.classList.add("d-none"); // Ocultar lista de generaciones.
    });

    // Manejo de opciones de generaciones
    const generationButtons = document.querySelectorAll(".list-group-item"); 
    generationButtons.forEach(button => {
        button.addEventListener("click", function () {
            const generationId = this.getAttribute("data-generation"); 
            // Ocultar todas las generaciones
            document.querySelectorAll(".generation-info").forEach(info => {
                info.classList.add("d-none");
            });
            // Mostrar la generación seleccionada
            document.getElementById(generationId).classList.remove("d-none"); 
        });
    });

    // Función de búsqueda
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        generationButtons.forEach(button => {
            const generationName = button.textContent.toLowerCase();
            if (generationName.includes(query)) {
                button.classList.remove("d-none");
            } else {
                button.classList.add("d-none");
            }
        });
    });
});
