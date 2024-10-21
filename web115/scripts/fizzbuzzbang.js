function checkDivision(number, divisor) {
    return number % divisor === 0;
}

function greetUser() {
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    const fullName = firstName + " " + (middleInitial ? middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "WELCOME to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";

    document.getElementById("greeting").textContent = newGreeting;

    const themeContainer = document.getElementById("themeMessages");
    themeContainer.innerHTML = "";

    const divisors = {
        3: "Roar!",
        5: "Sip!",
        7: "BANG!"
    };

    for (let i = 1; i <= 140; i++) {
        let message = i + ". ";
        
        for (const divisor in divisors) {
            if (checkDivision(i, divisor)) {
                message += divisors[divisor] + " ";
            }
        }

        if (message.trim() === i + ".") {
            message += "Brew!";
        }

        const listItem = document.createElement("li");
        listItem.textContent = message.trim();
        themeContainer.appendChild(listItem);
    }
    return false; 
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        greetUser();
    });
});