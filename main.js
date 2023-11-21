/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}


//boton copiar url
function copiarURL() {
    // Obtén la dirección URL que deseas copiar
    var direccionURL = window.location.href;

    // Crea un elemento de texto temporal
    var elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = direccionURL;

    // Añade el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);

    // Selecciona el contenido del elemento temporal
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    // Copia el contenido al portapapeles
    document.execCommand('copy');

    // Elimina el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);

    // Muestra un mensaje de éxito (puedes personalizarlo según tus necesidades)
    alert('URL copiada: ' + direccionURL);
}
