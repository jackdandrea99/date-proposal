const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yesButton");
let videoPlayed = false;

// NO scappa subito
function moveNoButton() {
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

// Funzione showMessage
function showMessage(response) {
    if (response === "No") {
        document.getElementsByClassName("image")[0].src = "https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif"; // gun GIF
        document.getElementById("question").textContent = "Choose wisely";
        document.getElementById("name").style.display = "none";

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

        document.getElementById("no-message").style.display = "block";
    }

    if (response === "Yes") {
        document.getElementById("name").remove();
        noButton.remove();

        const videoElement = document.querySelector("video");
        if (videoElement) {
            videoElement.pause();
            videoElement.remove();
        }

        const audioElement = document.createElement("audio");
        audioElement.src = "./Minions Cheering.mp3";
        audioElement.preload = "auto";
        audioElement.play().catch(e => console.error("Audio playback failed:", e));

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "Ottima scelta 😌 allora ci sentiamo e organizziamo 😉";

        // Rimuove GIF precedente
        document.getElementsByClassName("image")[0].remove();

        // Inserisce GIF Tenor
        const tenorEmbed = document.createElement("div");
        tenorEmbed.className = "tenor-gif-embed";
        tenorEmbed.setAttribute("data-postid", "22166163990103218");
        tenorEmbed.setAttribute("data-share-method", "host");
        tenorEmbed.setAttribute("data-aspect-ratio", "1.16279");
        tenorEmbed.setAttribute("data-width", "100%");
        document.querySelector(".container").insertBefore(tenorEmbed, yesMessage);

        const tenorScript = document.createElement("script");
        tenorScript.src = "https://tenor.com/embed.js";
        tenorScript.async = true;
        document.body.appendChild(tenorScript);

        yesButton.remove();
        document.getElementById("yes-message").style.display = "block";
    }
}

// Event listener
noButton.addEventListener("mouseover", moveNoButton); // Desktop
noButton.addEventListener("click", () => showMessage("No"));
yesButton.addEventListener("click", () => showMessage("Yes"));


