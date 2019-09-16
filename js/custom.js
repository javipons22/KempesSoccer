(function($) {
    $('.menu-icon').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            //$('.menu-items').slideToggle(function() {});
        })
        // var temp = document.getElementById("imagenes-contenedor").children;
        // var cantidadSetImagenes = temp.length;
        // console.log(cantidadSetImagenes);
})(jQuery);


// Para hacer andar la funcion agregar onclick="expand('info')" en el link del menu
function expand(element) {
    var viewportHeight = $(window).height();
    var elementHeight = $(".info").outerHeight();
    var diffHeight = viewportHeight - elementHeight;
    //var paddingPrevious = $(".info").css('padding-top');
    var paddingToShow = diffHeight / 2;
    var selectedElement = document.querySelector('.' + element);
    var i = 0;
    $(selectedElement).animate({ 'padding-top': paddingToShow + 'px', 'padding-bottom': paddingToShow + 'px' }, 600);
    $(document).scroll(function() {
        i++;
        if (i > 1) {
            $(selectedElement).animate({ 'padding-top': 0 + 'px', 'padding-bottom': 0 + 'px' }, 600);
        }
    });
}