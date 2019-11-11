(function($) {


    $('.menu-icon').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('nav').slideToggle();
    });
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if ($(window).width() >= 1124) {
            // if larger or equal
            $('nav').show();
        } else {
            // if smaller
            $('nav').hide();
            var i = 0;

        }
        linkPDFMovil();
    }).resize();
    // var temp = document.getElementById("imagenes-contenedor").children;
    // var cantidadSetImagenes = temp.length;
    // console.log(cantidadSetImagenes);

})(jQuery);

// Esconder nav si se hace click en alguno de sus links pero solo si la pantalla es menor a desktop, (se activa desde el a del HTML)
function hideNav() {
    if ($(window).width() <= 1024) {
        $('nav').slideToggle();
        $('.hamburger-menu').toggleClass('animate');
    } else {
        return
    }
};

// Cuando la pantalla es un movil o celular el link debe ser una imagen en pdfmovil.html
function linkPDFMovil() {
    if ($(window).width() <= 576) {
        for (var i = 1; i <= 5; i++) {
            $(`.info a:nth-child(${i})`).attr("href", `pdfmovil.html#pdf${i+1}`);
        }
        $(`.cta-principal`).attr("href", `pdfmovil.html`);

    }
}

var elementos = {
    nav1 : "nav ul li:nth-child(1) a",
    nav2 : "nav ul li:nth-child(2) a",
    nav3 : "nav ul li:nth-child(3) a",
    nav4 : "nav ul li:nth-child(4) a",
    titulo1 : ".titulo h2",
    titulo2 : ".titulo-container-imagenes h1",
    titulo3 : ".titulo-container-imagenes span",
    titulo4 : "form h1",
    parrafo1 : ".caja-banner p",
    boton1 : ".cta-principal .boton",
    boton2 : ".botones-pdf a:nth-child(1) h2",
    boton3 : ".botones-pdf a:nth-child(2) h2",
    boton4 : ".botones-pdf a:nth-child(3) h2",
    input1 : "form input[type=submit]",
    input2 : "form input:nth-child(2)",
    input3 : "form input:nth-child(3)",
    input4 : "form input:nth-child(4)",
    input5 : "form textarea",
    footer1 : ".copyright span:nth-child(1)",
    footer2 : ".copyright span:nth-child(2)",
}

var textosEspañol = {};

// ------------------------------
// OBTENEDOR DE TEXTOS EN ESPAÑOL
// ------------------------------

// Iteramos en el objeto elementos
for (var elemento in elementos) {
    // Obtenemos el selector del elemento deseado para usarlo con jQuery
    var temp = elementos[elemento];

    // Si el elemento es un input o un text area obtener placeholder y value respectivamente
    if(jQuery(temp).selector.indexOf("input") !== -1 || jQuery(temp).selector.indexOf("textarea") !== -1){
        // verificamos que el atributo type no de error cuando es "undefined" (en el caso del textarea)
        try{
            // Si es submit obtenemos value y si no es submit el placeholder
            if(jQuery(temp).attr('type').indexOf("submit") !== -1){
                textosEspañol[elemento] = jQuery(temp).attr('value');
            } else {
                textosEspañol[elemento] = jQuery(temp).attr('placeholder');
            }
        } catch { // En este caso es el textarea que da undefined ya que no tiene "type" 
            textosEspañol[elemento] = jQuery(temp).attr('placeholder');
        }
    } else { // Si el elemento no es input ni text area obtenemos el texto del elemento (todos los elementos que no sean input ni textarea)
        textosEspañol[elemento] = jQuery(temp).text();
    }
}

console.log(textosEspañol);

function cambiarIdioma(element) {
    var currentSrc = jQuery(".cambiar-idioma__boton img").attr("src");
    console.log(currentSrc);
    if (currentSrc === 'img/ukflag.png') {
        jQuery(".cambiar-idioma__boton img").attr("src","img/spainflag.png");
        jQuery(".cambiar-idioma__boton span").text("Ver en Español");
    } else {
        jQuery(".cambiar-idioma__boton img").attr("src","img/ukflag.png");
        jQuery(".cambiar-idioma__boton span").text("View in English");
    }

}



// // Para hacer andar la funcion agregar onclick="expand('info')" en el link del menu
// function expand(element) {
//     var viewportHeight = $(window).height();
//     var elementHeight = $(".info").outerHeight();
//     var diffHeight = viewportHeight - elementHeight;
//     //var paddingPrevious = $(".info").css('padding-top');
//     var paddingToShow = diffHeight / 2;
//     var selectedElement = document.querySelector('.' + element);
//     var i = 0;
//     $(selectedElement).animate({ 'padding-top': paddingToShow + 'px', 'padding-bottom': paddingToShow + 'px' }, 600);
//     $(document).scroll(function() {
//         i++;
//         if (i > 1) {
//             $(selectedElement).animate({ 'padding-top': 0 + 'px', 'padding-bottom': 0 + 'px' }, 600);
//         }
//     });
// }