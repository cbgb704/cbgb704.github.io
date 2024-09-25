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
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        greetUser(); 
    });
});