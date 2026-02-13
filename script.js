function reproducirMusica() {
    document.getElementById("musica").play();
}

// ================= CONTADORES EN TIEMPO REAL =================

function actualizarContador(idElemento, fechaInicio, texto) {
    const inicio = new Date(fechaInicio).getTime();

    function actualizar() {
        const ahora = new Date().getTime();
        const diferencia = ahora - inicio;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        document.getElementById(idElemento).innerHTML =
            `${texto}<br>
            <strong>${dias}</strong> días 
            ${horas}h ${minutos}m ${segundos}s 💖`;
    }

    actualizar();
    setInterval(actualizar, 1000);
}

actualizarContador(
    "contadorHablando",
    "2024-04-15T00:00:00",
    "Tiempo desde que empezamos a hablar:"
);

actualizarContador(
    "contadorNovios",
    "2024-06-25T00:00:00",
    "Tiempo siendo novios:"
);


// ================= CARTA =================

const textoCarta = `Desde aquel 15 de abril de 2024, cuando empezamos a hablar,
algo en mí supo que no eras una persona más.

Sin darme cuenta, empezaste a convertirte en mi parte favorita del día,
en el mensaje que esperaba con ilusión,
en la sonrisa que aparecía sin esfuerzo.

Y el 25 de junio de 2024,
cuando aceptaste ser mi polola,
mi corazón entendió que estaba exactamente donde quería estar.

Desde entonces, cada risa tuya,
cada conversación,
cada abrazo,
ha construido el lugar más bonito que existe para mí: nosotros.

Gracias por elegirme,
por quedarte,
por ser mi paz y mi alegría.

Te amo con todo mi corazón,
hoy, mañana y siempre 💗💜`;

let i = 0;
let cartaAbierta = false;

function abrirCarta() {
    if (cartaAbierta) return;

    document.querySelector(".tapa").style.transform = "rotateX(180deg)";
    document.getElementById("carta").style.display = "block";

    crearCorazones(25);
    escribirCarta();
    cartaAbierta = true;
}

function escribirCarta() {
    if (i < textoCarta.length) {
        document.getElementById("mensaje").innerHTML += textoCarta.charAt(i);
        i++;
        setTimeout(escribirCarta, 30);
    }
}

// ================= MODAL =================

function abrirModal(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
    crearCorazones(15);
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// ================= EXTRA CHATS =================

function toggleExtraChats() {
    document.getElementById("extraChats").classList.toggle("mostrar");
    crearCorazones(20);
}

// ================= CORAZONES =================

function crearCorazones(cantidad) {
    const container = document.getElementById("corazones-container");

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "💗";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = Math.random() * 20 + 15 + "px";
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s";

        container.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000);
    }
}

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("active");
        }
    });
});

// ================= REPRODUCCIÓN AUTOMÁTICA =================

document.addEventListener("DOMContentLoaded", function () {
    const musica = document.getElementById("musica");

    // Intento automático
    musica.play().catch(() => {
        // Si el navegador lo bloquea, se activará en el primer clic
        document.addEventListener("click", () => {
            musica.play();
        }, { once: true });
    });
});
