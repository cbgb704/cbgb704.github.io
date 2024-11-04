function checkDivision(number, divisor) {
    return number % divisor === 0;
}

function greetUser() {
    const firstName = document.getElementById("firstname").value;
    const middleInitial = document.getElementById("middleinitial").value;
    const lastName = document.getElementById("lastname").value;

    const fullName = firstName + " " + (middleInitial ? middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "WELCOME to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";

    document.getElementById("greeting").textContent = newGreeting;

    themeContainer = document.getElementById("thememessages");
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
function resetForm() {
    document.getElementById("greetingform").reset();
    document.getElementById("greeting").textContent = "Welcome to Dragon's Lair Cafe!"; 
    document.getElementById("thememessages").innerHTML = "";}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingform");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        greetUser();
    });
    resetButton.addEventListener("click", resetForm);
});
