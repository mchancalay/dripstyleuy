// Obtener los elementos por su clase
const galleryImgs = document.querySelectorAll('.gallery__img');

var botonActivado = null;

// Recorrer cada una de las imagenes y agregar un event listener
for (var i = 0; i < galleryImgs.length; i++) {
    galleryImgs[i].addEventListener("click", function () {

        // Verificar si la imagen ya está activada
        if (this.classList.contains("gallery__img--activado")) {
            this.classList.remove("gallery__img--activado");
        } else {

            if (botonActivado) {
                // Si hay un imagen activada, eliminar la clase de la imagen activada
                botonActivado.classList.remove("gallery__img--activado");
            }

            // Agregar la clase a la imagen que se hizo clic
            this.classList.add("gallery__img--activado");
            
            // Guardar la imagen activada
            botonActivado = this;
        }

    });
}