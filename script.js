console.log("========== DEVCONF 2026 ==========");
console.log("JavaScript Connected Successfully!");
console.log("==================================");
console.log("Welcome to DEVCONF 2026");
console.log("Let's Learn JavaScript");
console.log("==================================");

// Conference Information
const conferenceName = "DEVCONF 2026";
let conferenceYear = 2026;
const numberOfSpeakers = 4;
const registrationOpen = true;

console.log("Conference Name:", conferenceName);
console.log("Data Type:", typeof conferenceName);

console.log("Conference Year:", conferenceYear);
console.log("Data Type:", typeof conferenceYear);

console.log("Conference Speakers:", numberOfSpeakers);
console.log("Data Type:", typeof numberOfSpeakers);

console.log("Registration Open:", registrationOpen);
console.log("Data Type:", typeof registrationOpen);

console.log("==================================");

// Ticket Prices
let standardTicket = 399;
let proTicket = 799;
let teamTicket = 5999;

console.log("Standard Ticket Price: $", standardTicket);
console.log("Pro Ticket Price: $", proTicket);
console.log("Team Ticket Price: $", teamTicket);

const total = standardTicket + proTicket + teamTicket;

console.log("Total Price of All Ticket Types: $", total);

console.log("==================================");

// ==================================
// Registration Calculation
// ==================================

let registeredPeople = 100;

console.log("Initial Registered People:", registeredPeople);

registeredPeople += 20;
console.log("After 20 New Registrations:", registeredPeople);

registeredPeople -= 5;
console.log("After 5 Cancellations:", registeredPeople);

registeredPeople += 10;
console.log("After 10 More Registrations:", registeredPeople);

console.log("==================================");

// ==================================
// Seat Calculation
// ==================================

const totalSeats = 500;

const seatLeft = totalSeats - registeredPeople;

console.log("Total Seats:", totalSeats);
console.log("Registered People:", registeredPeople);
console.log("Remaining Seats:", seatLeft);

console.log("==================================");
console.log("Module 7 Practice Completed!");
console.log("==================================");
document.querySelector(".nav-bar").getBoundingClientRect()