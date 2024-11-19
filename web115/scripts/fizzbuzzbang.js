function checkDivision(number, divisor) {
    return number % divisor === 0;
}

function greetUser() {
    const firstName = document.getElementById("firstname").value;
    const middleInitial = document.getElementById("middleinitial").value;
    const lastName = document.getElementById("lastname").value;

    const fullName = firstName + " " + (middleInitial ? " " + middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "Welcome to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";

    document.getElementById("greeting").textContent = newGreeting;

    const themeContainer = document.getElementById("thememessages");
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
function resetForm() {
    document.getElementById("greetingform").reset();
    document.getElementById("greeting").textContent = "Welcome to Dragon's Lair Cafe!"; 
    document.getElementById("thememessages").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingform");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        greetUser();
    });
    resetbutton.addEventListener("click", resetForm);
});
