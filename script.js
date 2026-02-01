function showMessage(response) {

    if (response === "No") {
        document.getElementById("no-message").style.display = "block";
    }

    if (response === "Yes") {

        // nasconde eventuale messaggio No
        document.getElementById("no-message").style.display = "none";

        // rimuove elementi iniziali
        noButton.remove();
        yesButton.remove();
        document.getElementById("name")?.remove();
        document.querySelector(".image")?.remove();

        // aggiorna testo
        const question = document.getElementById("question");
        question.textContent = "Ottima scelta 😝";

        document.getElementById("yes-message").style.display = "block";

        // audio (file locale)
        const audio = document.createElement("audio");
        audio.src = "minions-cheering.mp4"; // <-- percorso corretto
        audio.play().catch(() => {});

        // GIF Tenor
        const gifWrapper = document.createElement("div");
        gifWrapper.innerHTML = `
        <div class="tenor-gif-embed"
             data-postid="22166163990103218"
             data-share-method="host"
             data-aspect-ratio="1.16279"
             data-width="100%">
        </div>
    `;

        document.querySelector(".Mainprompt").appendChild(gifWrapper);

        // forza Tenor a renderizzare
        if (window.Tenor && window.Tenor.init) {
            window.Tenor.init();
        }
    }
}





