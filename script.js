// Prendi i pulsanti
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yesButton");

// Funzione per far "scappare" il pulsante No
function moveNoButton() {
    const step = 180;

    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const currentX = noButton.offsetLeft;
    const currentY = noButton.offsetTop;

    const moveX = (Math.random() * 2 - 1) * step;
    const moveY = (Math.random() * 2 - 1) * step;

    const newX = Math.max(0, Math.min(currentX + moveX, maxWidth));
    const newY = Math.max(0, Math.min(currentY + moveY, maxHeight));

    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}

// Funzione per gestire il click su "Sì"
function showMessage() {
    // Rimuove elementi iniziali
    noButton.remove();
    yesButton.remove();
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.remove();
    const imgEl = document.querySelector(".image");
    if (imgEl) imgEl.remove();

    // Aggiorna testo della domanda
    const question = document.getElementById("question");
    if (question) question.textContent = "Ottima scelta 😎";

    // Mostra messaggio Yes
    const yesMessage = document.getElementById("yes-message");
    if (yesMessage) yesMessage.style.display = "block";

    // Riproduci audio
    const audio = document.createElement("audio");
    audio.src = "minions-cheering.mp4"; 
    audio.play().catch(() => {});

    // Aggiungi GIF Tenor tramite iframe
    const gifWrapper = document.createElement("iframe");
    gifWrapper.src = "https://tenor.com/view/minions-celebrate-gif-22166163990103218/embed?media=false";
    gifWrapper.width = "100%";
    gifWrapper.height = "300";
    gifWrapper.frameBorder = "0";
    gifWrapper.scrolling = "no";

    const mainPrompt = document.querySelector(".Mainprompt");
    if (mainPrompt) mainPrompt.appendChild(gifWrapper);
}

// Event listener
if (noButton) {
    noButton.addEventListener("mousemove", moveNoButton);
    // Nessun click handler: non mostra nulla
}

if (yesButton) {
    yesButton.addEventListener("click", showMessage);
}






