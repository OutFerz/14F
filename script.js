function mostrarSorpresa() {
    const texto = document.getElementById("sorpresaTexto");
    texto.innerHTML = "Eres mi lugar favorito en el mundo 💗💜";
    texto.style.fontSize = "1.5em";
    texto.style.marginTop = "20px";
}

// Contador desde el 15 de abril de 2024
const inicio = new Date("2024-04-15");
const hoy = new Date();
const diferencia = hoy - inicio;
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
document.getElementById("diasJuntos").innerHTML = dias + " días juntos 💖";

// Corazones flotando
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💜";
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100vh";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";
    corazon.style.animation = "flotar 6s linear forwards";
    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 6000);
}, 400);
