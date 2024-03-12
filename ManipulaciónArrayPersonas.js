// exercise5.js

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);
people.splice(1, 1); // Remove "Dani"
people.splice(2, 1); // Remove "Juan"
people.unshift(people.splice(2, 1)[0]); // Move "Luis" to the front
people.push("YourName"); // Add your name to the end
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") break;
}
console.log("Index of Maria:", people.indexOf("Maria")); // Get index of "Maria"
