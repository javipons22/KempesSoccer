
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
            $(`.info a:nth-child(${i})`).attr("href", `pdfmovil2.html#pdf${i+1}`);
        }
        $(`.cta-principal`).attr("href", `pdfmovil2.html`);

    }
}



linkPDFMovil();

//Obtener query string para ver si hay envio de email o error
var urlParams = new URLSearchParams(window.location.search);

var query = urlParams.get('error'); // "edit"
console.log(query);

// Si el formulario devuelve el query error=true mostrar "mensaje no enviado" ,
if (query == "true") {
    $(".email__contenedor--no-enviado, .email").css("display","flex");
// Si el formulario devuelve error=false mostrar "mensaje enviado"
} else if (query == "false"){
    $(".email__contenedor--enviado, .email").css("display","flex");
}

// Handlers de click en boton cerrar o aceptar (del mensaje de email)
$(".email__boton-aceptar , .email__boton-cerrar").click(function(){
    $(".email__contenedor, .email").css("display","none");
});
