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

   const count = prompt("How high do you want to count, " + firstName + "?");

   for (let i = 1; i <= count; i++) {
       const message = i + ". Bazoom Bazang - the number is " + (i % 2 === 0 ? "even" : "odd");
       const listItem = document.createElement("li");
       listItem.textContent = message;
       themeContainer.appendChild(listItem);
   }

   return false;
}