// Ver como funciona dot.findIndex

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

//const dotsNav = document.querySelector('.carousel__nav');
//const dots = Array.from(dotsNav.children);
function automaticMoveToSlide(currentSlide) {
    if (jQuery(currentSlide).is(':last-child')) {
        console.log('is-last');
        jQuery(prevButton).trigger("click");
        var desc = true;
    } else if (jQuery(currentSlide).is(':first-child')) {
        console.log('isfirst');
        jQuery(nextButton).trigger("click");
        var desc = false
    } else {
        console.log('middle');
        if (desc) {
            jQuery(prevButton).trigger("click");
        } else {
            jQuery(nextButton).trigger("click");
        }

    }
}


const moveToSlide = (track, currentSlide, targetSlide) => {
    // mover a la siguiente o anterior slide
    //track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    var currentSlide = track.querySelector('.current-slide');
    jQuery(currentSlide).fadeOut().css("display", "none");
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    jQuery(targetSlide).fadeIn().css("display", "block");

    if (jQuery(targetSlide).is(':last-child')) {
        console.log('last');
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else if (jQuery(targetSlide).is(':first-child')) {
        console.log('first');
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else {
        console.log('middle');
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
};

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');

// };


// Al hacer click al boton izquierdo , mover slide a la izquierda
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const prevDot = currentDot.previousElementSibling;
    //const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);


    //updateDots(currentDot, prevDot);
});

// Al hacer click al boton derecho , mover slide a la derecha
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    // const currentDot = dotsNav.querySelector('.current-slide');
    // const nextDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});

// dotsNav.addEventListener('click', e => {
//     // que indicador fue clickeado 
//     const targetDot = e.target.closest('button');
//     // Si es el fondo de los indicadores y no los indicadores lo que fue apretado salir de la funcion
//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);


// });