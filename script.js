// ==========================
// NO che scappa al passaggio del mouse
// ==========================
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yesButton");
const maxWidth = window.innerWidth - noButton.offsetWidth;
const maxHeight = window.innerHeight - noButton.offsetHeight;

let videoPlayed = false;

// Funzione per far muovere NO
function moveNoButton() {
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

// Event listener NO
noButton.addEventListener("mouseover", () => {
    moveNoButton();
});

// ==========================
// Funzione showMessage
// ==========================
function showMessage(response) {

    if (response === "No") {
        // Cambia immagine
        document.getElementsByClassName("image")[0].src = "images/gun.gif";
        document.getElementById("question").textContent = "Choose wisely";
        document.getElementById("name").style.display = "none";

        // Video Maroon 5 (una sola volta)
        if (!videoPlayed) {
            const videoElement = document.createElement("video");
            videoElement.src = "./Maroon 5 - Sugar.mp4#t=42";
            videoElement.autoplay = true;
            videoElement.controls = false;
            videoElement.style.position = "fixed";
            videoElement.style.top = "40%";
            videoElement.style.left = "50%";
            videoElement.style.transform = "translate(-50%, -50%)";
            videoElement.style.width = "700px";
            document.body.appendChild(videoElement);
            videoPlayed = true;
        }

        // Mostra messaggio NO
        document.getElementById("no-message").style.display = "block";
    }

    if (response === "Yes") {
        // Rimuove name e NO
        document.getElementById("name").remove();
        noButton.remove();

        // Rimuove eventuale video
        const videoElement = document.querySelector("video");
        if (videoElement) {
            videoElement.pause();
            videoElement.remove();
        }

        // Suono YES
        const audioElement = document.createElement("audio");
        audioElement.src = "./Minions Cheering.mp3";
        audioElement.preload = "auto";
        audioElement.play().catch(e => console.error("Audio playback failed:", e));

        // Cambia testo e immagine
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "Ottima scelta 😌 allora ci sentiamo e organizziamo 😉";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        // Rimuove bottone YES
        yesButton.remove();

        // Mostra messaggio YES (opzionale)
        document.getElementById("yes-message").style.display = "block";
    }
}

// ==========================
// Event listener per click sui bottoni
// ==========================
noButton.addEventListener("click", () => showMessage("No"));
yesButton.addEventListener("click", () => showMessage("Yes"));
  }

}
