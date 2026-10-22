
function cambiarColorAleatorio(elemento) {
    const colores = ["green", "blue", "red"];

    const indiceAleatorio = Math.floor(
        Math.random() * colores.length
    );

    elemento.style.color = colores[indiceAleatorio];
}

// Agregar un evento de clic a cada h5
document.querySelectorAll("h5").forEach(function (titulo) {
    titulo.addEventListener("click", function () {
        cambiarColorAleatorio(this);
    });
});
