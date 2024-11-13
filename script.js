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
    
    // Se la risposta è corretta, mostra il bottone "Giappone"
    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "Risposta corretta!"; // Messaggio di successo
        document.getElementById("result").classList.remove("error");
        document.getElementById("goToJapanLink").classList.remove("hidden"); // Mostra il link per Giappone
    } else {
        // Risposta sbagliata, messaggio di errore
        document.getElementById("result").innerHTML = "<p>Ops! La risposta non è corretta. Occhio a come digiti i numeri.</p>";
        document.getElementById("result").classList.add("error");
    }
});




// Funzioni per il drag-and-drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropzone = ev.target;

    // Posiziona l'evento sulla data
    if (dropzone.className === "dropzone") {
        dropzone.innerHTML = draggedElement.innerHTML;
        dropzone.style.backgroundColor = draggedElement.style.backgroundColor;
        draggedElement.style.display = "none"; // Nasconde l'evento una volta trascinato
    }
}

// Funzione per verificare la risposta
function checkAnswer() {
    let correct = true;
    const answers = [
        { dateId: "date1", eventText: "Arrivo di Commodoro Perry (1853)" },
        { dateId: "date2", eventText: "Bombardamento di Hiroshima (1945)" },
        { dateId: "date3", eventText: "Restaurazione Meiji (1868)" },
        { dateId: "date4", eventText: "Olimpiadi di Tokyo (1964)" },
        { dateId: "date5", eventText: "Terremoto di Tōhoku (2011)" }
    ];

    // Controlla se ogni data contiene l'evento corretto
    answers.forEach(answer => {
        const dateElement = document.getElementById(answer.dateId);
        if (dateElement.innerHTML !== answer.eventText) {
            correct = false;
        }
    });

    // Mostra il risultato
    const resultElement = document.getElementById("result");
    if (correct) {
        resultElement.innerHTML = "Complimenti, hai ordinato correttamente gli eventi!";
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.innerHTML = "Ops! Alcuni eventi sono nel posto sbagliato. Riprova!";
        resultElement.style.color = "#e74c3c";
    }
}

