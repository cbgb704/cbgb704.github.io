function greetUser() {
    const firstName = document.getElementById("firstname").value;
    const middleInitial = document.getElementById("middleinitial").value;
    const lastName = document.getElementById("lastname").value;
 
    const fullName = firstName + " " + (middleInitial ? middleInitial + "." : "") + " " + lastName;
    const originalGreeting = "WELCOME to Dragon's Lair Cafe";
    const newGreeting = originalGreeting + ", " + fullName + "!";
 
    document.getElementById("greeting").textContent = newGreeting;
 
    const themeContainer = document.getElementById("thememessages");
    themeContainer.innerHTML = "";
 
    const count = prompt("How high do you want to count, " + firstName + "?");
 
    for (let i = 1; i <= count; i++) {
        const message = i + ". Bazoom Bazang - the number is " + (i % 2 === 0 ? "even" : "odd");
        const listItem = document.createElement("li");
        listItem.textContent = message;
        themeContainer.appendChild(listItem);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingform");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        greetUser(); 
});
});