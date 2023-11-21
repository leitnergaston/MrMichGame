// SCROLL UP BOTON

// CODIGO PARA Q EL BOTON FUNCIONE
document.getElementById("btn-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, 0);
    }
}

// CODIGO PARA Q EL BTN APAREZCA CUANDO BAJAMOS
btnUp = document.getElementById("btn-up");


window.onscroll = function(){
    // guardar en variable en q posicion está el scroll
    var scroll = document.documentElement.scrollTop;

    // cuando el scroll este en cierto valor aparezca el boton
    if (scroll > 500){
        btnUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        btnUp.style.transform = "scale(0)";
    }
}