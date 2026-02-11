function reproducirMusica() {
    document.getElementById("musica").play();
}

function mostrarSorpresa() {
    const texto = document.getElementById("sorpresaTexto");
    texto.innerHTML = "Eres mi lugar favorito en el mundo 💗💜";
}

// Contador
const inicio = new Date("2024-04-15");
const hoy = new Date();
const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
document.getElementById("diasJuntos").innerHTML = dias + " días juntos 💖";

// Abrir carta animada
function abrirCarta() {
    document.querySelector(".tapa").style.transform = "rotateX(180deg)";
    const carta = document.getElementById("carta");
    carta.style.display = "block";
    escribirCarta();
}

// Carta escribiéndose
const textoCarta = `Desde que empezamos a hablar aquel 15 de abril de 2024, mi mundo cambió por completo.
Y desde ese 25 de junio de 2024 en que aceptaste ser mi novia, supe que eras la persona con la que quería compartir todo.

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

// Modal fotos
function abrirModal(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
