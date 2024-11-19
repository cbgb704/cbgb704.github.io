function checkDivision(number, divisor) {
    return number % divisor === 0;
}

function greetUser() {
    const firstName = document.getElementById("firstname").value.trim();
    const middleInitial = document.getElementById("middleinitial").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const totalCount = parseInt(document.getElementById("total").value.trim()) || 125;

    const divisors = [
        {
            divisor: parseInt(document.getElementById("divisor1").value.trim()),
            word: document.getElementById("word1").value.trim()
        },
        {
            divisor: parseInt(document.getElementById("divisor2").value.trim()),
            word: document.getElementById("word2").value.trim()
        },
        {
            divisor: parseInt(document.getElementById("divisor3").value.trim()),
            word: document.getElementById("word3").value.trim()
        }
    ];

    const fallbackWord = document.getElementById("fallback").value.trim();

    const fullName = firstName + " " + (middleInitial ? middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "Welcome to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";

    document.getElementById("greeting").textContent = newGreeting;

    const themeContainer = document.getElementById("thememessages");
    themeContainer.innerHTML = "";

    for (let i = 1; i <= totalCount; i++) {
        let message = i + ". ";
        let hasDivisorMatch = false;

        for (const { divisor, word } of divisors) {
            if (divisor && checkDivision(i, divisor)) {
                message += word + " ";
                hasDivisorMatch = true;
            }
        }

        if (!hasDivisorMatch && fallbackWord) {
            message += fallbackWord;
        }

        const listItem = document.createElement("li");
        listItem.textContent = message.trim();
        themeContainer.appendChild(listItem);
    }
    return false;
}

function resetForm() {
    document.getElementById("greetingform").reset();
    document.getElementById("greeting").textContent = "Welcome to Dragon's Lair Cafe!";
    document.getElementById("thememessages").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("greetingform");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        greetUser();
    });

    const resetButton = document.getElementById("resetbutton");
    resetButton.addEventListener("click", resetForm);
});