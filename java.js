document.getElementById("submitTime").addEventListener("click", function() {
    const userInput = document.getElementById("timeGuess").value.trim();
    const correctTime = "00:35"; // Il momento corretto in cui avviene la race condition nel video

    const feedback = document.getElementById("feedback");
    const nextLevelLink = document.getElementById("nextLevelLink");

    if (userInput === correctTime) {
        feedback.innerHTML = "Risposta corretta! Hai identificato la race condition.";
        feedback.style.color = "#2ecc71"; // Verde
        nextLevelLink.classList.remove("hidden");
    } else {
        feedback.innerHTML = "Risposta errata. Riprova!";
        feedback.style.color = "#e74c3c"; // Rosso
    }
});
