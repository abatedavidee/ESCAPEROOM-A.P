// Variabile per tenere traccia dei clic sulla scritta "Scopri di più..."
let clickCount = 0;

// Quando l'utente clicca sulla scritta "Scopri di più..."
document.getElementById("showMore").addEventListener("click", function() {
    clickCount++;

    // Dopo 3 clic, mostriamo il video
    if (clickCount >= 3) {
        document.getElementById("videoContainer").classList.remove("hidden"); // Mostra il video
        document.getElementById("showMore").classList.add("hidden"); // Nascondi il link "Scopri di più"
    }
});

// Verifica la risposta
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Previene il comportamento predefinito di invio del form

    // Ottieni la risposta inserita dall'utente
    var userAnswer = document.getElementById("timeAnswer").value.trim();
    
    // La risposta corretta (tempo esatto in cui appare il libro)
    var correctAnswer = "00:45";  // Tempo esatto in cui appare il libro
    
    // Se la risposta è corretta, mostra un messaggio di successo
    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "<p>Complimenti! Hai trovato il tempo giusto. Prosegui al prossimo enigma!</p>";
        document.getElementById("result").classList.remove("error");
    } else {
        // Risposta sbagliata, messaggio di errore
        document.getElementById("result").innerHTML = "<p>Ops! La risposta non è corretta. Occhio a come digiti i numeri.</p>";
        document.getElementById("result").classList.add("error");
    }
});
