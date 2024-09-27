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
    
    const firstDivisor = 3;  
    const secondDivisor = 5; 

    for (let i = 1; i <= 140; i++) {
        const listItem = document.createElement("li");

        if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
            listItem.textContent = i + ". Roar! Sip!";
        } else if (checkDivision(i, firstDivisor)) {
            listItem.textContent = i + ". Roar!";
        } else if (checkDivision(i, secondDivisor)) {
            listItem.textContent = i + ". Sip!";
        } else {
            listItem.textContent = i + ". Brew!";
        }

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