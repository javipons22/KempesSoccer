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
    nav1 : "nav ul li a:nth-child(1)",
    nav2 : "nav ul li a:nth-child(2)",
    nav3 : "nav ul li a:nth-child(3)",
    nav4 : "nav ul li a:nth-child(4)"
}

var textos = {};

for (var elemento in elementos) {
    console.log(jQuery(elementos[elemento]).text());
    var i = 1;
    //textos["nav" + i] = jQuery(elementos[elemento]).text();
    i++;

}

console.log(textos);

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