function reproducirMusica() {
    document.getElementById("musica").play();
}

function mostrarSorpresa() {
    const texto = document.getElementById("sorpresaTexto");
    texto.innerHTML = "Eres mi lugar favorito en el mundo 💗💜";
    texto.style.fontSize = "1.5em";
    texto.style.marginTop = "20px";
}

// Contador días
const inicio = new Date("2024-04-15");
const hoy = new Date();
const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
document.getElementById("diasJuntos").innerHTML = dias + " días juntos 💖";

// Carta escribiéndose
const textoCarta = `Desde que empezamos a hablar aquel 15 de abril de 2024, mi mundo cambió por completo.
Cada día contigo es más bonito que el anterior, cada risa tuya ilumina mis días
y cada momento juntos se queda guardado en mi corazón.

Gracias por ser mi paz, mi alegría y mi persona favorita.
Te amo muchísimo, hoy y siempre 💗💜`;

let i = 0;
function escribirCarta() {
    if (i < textoCarta.length) {
        document.getElementById("mensaje").innerHTML += textoCarta.charAt(i);
        i++;
        setTimeout(escribirCarta, 35);
    }
}
escribirCarta();

// Lluvia de corazones
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.innerHTML = ["💖", "💜", "💕", "💗"][Math.floor(Math.random() * 4)];
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "-10px";
    corazon.style.fontSize = Math.random() * 20 + 15 + "px";
    corazon.style.animation = "caer 6s linear forwards";
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
}, 300);

// Modal fotos
function abrirModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
