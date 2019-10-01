// Ver como funciona dot.findIndex

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

function automaticMoveToSlide() {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    } else {
        moveToSlide(track, currentSlide, slides[0]);
    }
}

let intervalo = setInterval(automaticMoveToSlide, 3000);

const moveToSlide = (track, currentSlide, targetSlide) => {
    var currentSlide = track.querySelector('.current-slide');
    jQuery(currentSlide).fadeOut().css("display", "none");
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    jQuery(targetSlide).fadeIn().css("display", "block");

    if (jQuery(targetSlide).is(':last-child')) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else if (jQuery(targetSlide).is(':first-child')) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
};


// Al hacer click al boton izquierdo , mover slide a la izquierda
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    // Al hacer click se detiene el paso de las diapositivas automatico
    clearInterval(intervalo);
    moveToSlide(track, currentSlide, prevSlide);
});

// Al hacer click al boton derecho , mover slide a la derecha
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    // Al hacer click se detiene el paso de las diapositivas automatico
    clearInterval(intervalo);
    moveToSlide(track, currentSlide, nextSlide);
});

// Al hacer hover en las imagenes se detiene el paso de las diapositivas automatico
$('.carousel__slide').hover(function() {
    clearInterval(intervalo);
}, function() {
    intervalo = setInterval(automaticMoveToSlide, 3000);
});