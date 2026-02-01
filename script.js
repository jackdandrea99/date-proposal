const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yesButton");

// NO che scappa
function moveNoButton() {
    const step = 180;

    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    let currentX = noButton.offsetLeft;
    let currentY = noButton.offsetTop;

    let moveX = (Math.random() * 2 - 1) * step;
    let moveY = (Math.random() * 2 - 1) * step;

    let newX = Math.max(0, Math.min(currentX + moveX, maxWidth));
    let newY = Math.max(0, Math.min(currentY + moveY, maxHeight));

    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}

// Gestione click
function showMessage(response) {

    if (response === "No") {
        document.getElementById("no-message").style.display = "block";
    }

    if (response === "Yes") {
        // rimuove elementi iniziali
        noButton.remove();
        yesButton.remove();
        document.getElementById("name").remove();
        document.querySelector(".image")?.remove();

        // aggiorna testo
        const question = document.getElementById("question");
        question.textContent =
            "Ottima scelta 😌 allora ci sentiamo e organizziamo 😉";

        // mostra messaggio sì
        document.getElementById("yes-message").style.display = "block";

        // inserisce GIF Tenor
        const gifWrapper = document.createElement("div");
        gifWrapper.innerHTML = `
            <div class="tenor-gif-embed"
                 data-postid="22166163990103218"
                 data-share-method="host"
                 data-aspect-ratio="1.16279"
                 data-width="100%">
            </div>
        `;

        document.querySelector(".Mainprompt")
            .insertBefore(gifWrapper, question.nextSibling);
    }
}

// Event listener
noButton.addEventListener("mousemove", moveNoButton);
noButton.addEventListener("click", () => showMessage("No"));
yesButton.addEventListener("click", () => showMessage("Yes"));




