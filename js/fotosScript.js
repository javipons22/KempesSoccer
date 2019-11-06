let pieDeFotoArray = [];

// quitamos los numeros de los pies de foto
pieDeFoto.forEach((element, index) => {
    var displayElement = element.replace(index + " - ", " ");
    pieDeFotoArray.push(displayElement);
});


for (var i = 0; i < pieDeFotoArray.length; i++) {
    if (i === 0) {
        var clase = "current-slide show-slide";
    } else {
        var clase = "";
    }
    let displayTemplate =
        `<li class="carousel__slide ${clase}">
                                <div>
                                    <img src="img/fotos kempes/${i}.jpg" alt="imagen ${i}">
                                    <p>${pieDeFotoArray[i]}</p>
                                </div>
                                <div>
                                    <img src="img/fotos kempes/${i+1}.jpg" alt="imagen ${i+1}">
                                    <p>${pieDeFotoArray[i + 1]}</p>
                                </div>
    </li>`;
    $(".carousel__track").append(displayTemplate);
    i++;
}