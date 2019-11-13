
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

var textosIngles = {
    boton1: "MORE INFO",
    boton2: "THE COMPANY",
    boton3: "SERVICES",
    boton4: "ACTIVITIES",
    footer1: "© All rights reserved",
    footer2: "Website created by ",
    input1: "Send Question",
    input2: "write your full name",
    input3: "write your country",
    input4: "write your e-mail",
    input5: "write your message",
    nav1: "HOME",
    nav2: "TOUR INFO",
    nav3: "IMAGES",
    nav4: "CONTACT",
    parrafo1: "<strong>KEMPESSOCCER</strong> offers you a unique service for professional clubs ,organizing a <strong>tour around Argentina</strong> including tournaments against Argentinian teams, measuring therefore their soccer abilities. Under the general management of <strong>Mario Alberto Kempes</strong>.",
    titulo1 : "SPORT TOUR",
    titulo2: "VISITORS",
    titulo3: "SUCCESS CASES",
    titulo4: "Send us your question !",
}

var textosEspañol = {};

// ------------------------------
// OBTENEDOR DE TEXTOS EN ESPAÑOL
// ------------------------------

function obtenerTextos(objeto){
    // Iteramos en el objeto elementos
    for (var elemento in objeto) {
        // Obtenemos el selector del elemento deseado para usarlo con jQuery
        var temp = objeto[elemento];

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
}

function cambiarTextos(objeto, idioma){
    // Iteramos en el objeto elementos
    for (var elemento in objeto) {
        // Obtenemos el selector del elemento deseado para usarlo con jQuery
        var temp = objeto[elemento];

        // Si el elemento es un input o un text area obtener placeholder y value respectivamente
        if(jQuery(temp).selector.indexOf("input") !== -1 || jQuery(temp).selector.indexOf("textarea") !== -1){
            // verificamos que el atributo type no de error cuando es "undefined" (en el caso del textarea)
            try{
                // Si es submit obtenemos value y si no es submit el placeholder
                if(jQuery(temp).attr('type').indexOf("submit") !== -1){
                    jQuery(temp).attr('value', idioma[elemento]);
                } else {
                    jQuery(temp).attr('placeholder', idioma[elemento]);
                }
            } catch { // En este caso es el textarea que da undefined ya que no tiene "type" 
                jQuery(temp).attr('placeholder', idioma[elemento]);
            }
        } else { // Si el elemento no es input ni text area obtenemos el texto del elemento (todos los elementos que no sean input ni textarea)
            jQuery(temp).html(idioma[elemento]);
        }
    }
}

obtenerTextos(elementos);

function cambiarIdioma(boton) {
    var currentSrc = jQuery(".cambiar-idioma__boton img").attr("src");
    if (currentSrc === 'img/ukflag.png') {
        jQuery(".cambiar-idioma__boton img").attr("src","img/spainflag.png");
        jQuery(".cambiar-idioma__boton span").text("Ver en Español");
        if ($(window).width() <= 576) {
            for (var i = 1; i <= 5; i++) {
                $(`.info a:nth-child(${i})`).attr("href", `pdfmovilingles.html#pdf${i+1}`);
            }
            $(`.cta-principal`).attr("href", `pdfmovilingles.html`);
        } else {
            jQuery(".cta-principal").attr("href","kempessocceringles.pdf");
        }
        cambiarTextos(elementos,textosIngles);
    } else {
        jQuery(".cambiar-idioma__boton img").attr("src","img/ukflag.png");
        jQuery(".cambiar-idioma__boton span").text("View in English");
        if ($(window).width() <= 576) {
            for (var i = 1; i <= 5; i++) {
                $(`.info a:nth-child(${i})`).attr("href", `pdfmovil.html#pdf${i+1}`);
            }
            $(`.cta-principal`).attr("href", `pdfmovil.html`);
        } else {
            jQuery(".cta-principal").attr("href","kempessoccer.pdf");
        }
        cambiarTextos(elementos,textosEspañol);
    }

}