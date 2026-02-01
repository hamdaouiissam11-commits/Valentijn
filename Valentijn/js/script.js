const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

// Nee-knop beweegt als je erover gaat
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Ja-knop toont bericht
yesBtn.addEventListener("click", () => {
    message.textContent = "Hmmmm, je klikt ja???? 😏";
});

// Hartjes regen
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random positie en grootte
    heart.style.left = Math.random() * window.innerWidth + "px";
    const size = 30 + Math.random() * 50;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Random kleur
    const colors = ["#ff4d4d", "#ff66b3", "#ff99cc", "#ffb3b3"];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Animatie snelheid
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Hartjes interval
setInterval(createHeart, 250);
