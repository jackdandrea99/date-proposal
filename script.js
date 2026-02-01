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

function showMessage(response) {
    if (response === "Yes") {
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

        // Aggiungi GIF Tenor
        const gifWrapper = document.createElement("div");
        gifWrapper.innerHTML = `
        <div class="tenor-gif-embed"
             data-postid="22166163990103218"
             data-share-method="host"
             data-aspect-ratio="1.16279"
             data-width="100%">
        </div>`;
        
        const mainPrompt = document.querySelector(".Mainprompt");
        if (mainPrompt) mainPrompt.appendChild(gifWrapper);

        // Inizializza Tenor se disponibile
        if (window.Tenor && typeof window.Tenor.init === "function") {
            window.Tenor.init();
        }
    }
}

// Event listener
if (noButton) {
    noButton.addEventListener("mousemove", moveNoButton);
    noButton.addEventListener("click", function() {
        showMessage("No");
    });
}

if (yesButton) {
    yesButton.addEventListener("click", function() {
        showMessage("Yes");
    });
}





