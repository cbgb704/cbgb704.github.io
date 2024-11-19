function greetUser() {
    const firstName = document.getElementById("firstname").value;
    const middleInitial = document.getElementById("middleinitial").value;
    const lastName = document.getElementById("lastname").value;

    const fullName = firstName + " " + (middleInitial ? " " + middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "WELCOME to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";

    document.getElementById("greeting").textContent = newGreeting;

    const themeContainer = document.getElementById("thememessages");
    themeContainer.innerHTML = "";

    for (let i = 1; i <= 140; i++) {
        const listItem = document.createElement("li");

        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = i + ". Roar! Slurp!"; // Divisible by both 3 and 5
        } else if (i % 3 === 0) {
            listItem.textContent = i + ". Roar!"; // Divisible by 3
        } else if (i % 5 === 0) {
            listItem.textContent = i + ". Slurp!"; // Divisible by 5
        } else {
            listItem.textContent = i + ". Brew!"; // Other numbers
        }
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
    resetButton.addEventListener("click", resetForm);
});
