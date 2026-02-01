function showMessage(response) {
    // Nasconde eventuali messaggi precedenti
    document.getElementById("no-message")?.style.display = "none";
    document.getElementById("yes-message")?.style.display = "none";

    if (response === "No") {
        document.getElementById("no-message")?.style.display = "block";
    }

    if (response === "Yes") {
        // Rimuove elementi iniziali
        noButton.remove();
        yesButton.remove();
        document.getElementById("name")?.remove();
        document.querySelector(".image")?.remove();

        // Aggiorna testo della domanda
        const question = document.getElementById("question");
        question.textContent = "Ottima scelta 😝";

        // Mostra messaggio Yes
        document.getElementById("yes-message")?.style.display = "block";

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
        document.querySelector(".Mainprompt")?.appendChild(gifWrapper);

        // Inizializza Tenor
        if (window.Tenor?.init) window.Tenor.init();
    }
}





