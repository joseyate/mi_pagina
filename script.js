const messages = [
    "Te amo muchisimo 😍 ",
    "Gracias por estar en mi Vida ❤️",
    "Eres mi persona Favorita 😘",
    "juntos por siempre 💖",
    "Tu y Yo, para siempre .🎉",
    "Tu sonriza me ilumina 💕👑",
    "Eres lo mejor que me ha pasado 🫰🏽",
    "Cada momento contigo es magico 💑",
    "Siempre pienso en ti 💏",
    "Mi corazon es tuyo 🎀",
    "Amo tu sonrisa 🫰🏽",
    "Amo tu mirada 💏",
    "Amo todo de ti 🎊",
    "hermosa 👑",
    "inteligente 🎊",
    "apasionada 🎎",
    "valiente 💑",
    "dulce 🎉",
    "increíble 🎁",
    "única 💕",
    "radiante 💕",
    "encantadora 💕",
    "mágica 😍",
    "tierna 😘",
    "cariñosa 🥰",
    "soñadora 🤗",
    "adorable🙂‍↔️ ",
    "brillante 🥳",
    "preciosa 👑",
    "fascinante ✨",
    "auténtica 🎊",
    "luminosa 🎁",
    "inspiradora 🎇",
];

function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if(rect.right > window.innerWidth){
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = '${newLeft}px';
        }

        if(rect.bottom > window.innerHeight){
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = '${newTop}px';
            }
        
        if(rect.left < 0){
            bubble.style.left = "10px";
        }
        if(rect.top < 0){
            bubble.style.top = "10px";
        }
    }, 10);
}

setInterval(createTextBubble, 500);
