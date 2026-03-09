/* ==========================================================
   WISDOM SPROUTS: JAVASCRIPT LOGIC ASSIGNMENTS
   Student: Vedant Suresh Agale
   ========================================================== */

// --- Assignment 1: Arithmetic Operations ---
let a = 12, b = 4;
console.log("--- Assignment 1: Arithmetic ---");
console.log("Add:", a + b, "| Sub:", a - b, "| Mult:", a * b, "| Div:", a / b);
console.log("--------------------------------\n");

// --- Assignment 2: Comparison Operators ---
console.log("--- Assignment 2: Comparison ---");
console.log("Is 12 > 4?", a > b);
console.log("Is 12 == 4?", a === b);
console.log("--------------------------------\n");

// --- Assignment 3: Scholarship Eligibility (Logical AND) ---
let math = 92, science = 88;
let eligible = (math >= 90 && science >= 85);
console.log("--- Assignment 3: Scholarship ---");
console.log("Eligible for Scholarship?", eligible);
console.log("--------------------------------\n");

// --- Assignment 4: Voting Eligibility ---
let age = 20;
console.log("--- Assignment 4: Voter Check ---");
if (age >= 18) {
    console.log("Status: You can vote!");
} else {
    console.log("Status: Not eligible to vote.");
}
console.log("--------------------------------\n");

// --- Assignment 5: Average of 3 Numbers ---
let n1 = 10, n2 = 20, n3 = 30;
let avg = (n1 + n2 + n3) / 3;
console.log("--- Assignment 5: Average ---");
console.log("Average is:", avg);
console.log("--------------------------------\n");

// --- Assignment 6: Perimeter of Rectangle ---
// Formula: 2 * (length + width)
let length = 10, width = 5;
let perimeter = 2 * (length + width);
console.log("--- Assignment 6: Rectangle ---");
console.log("Perimeter:", perimeter);
console.log("--------------------------------\n");

// --- Assignment 7: Simple Discount Calculator ---
let bill = 1200;
let discount = 0;
if (bill > 1000) {
    discount = bill * 0.10; // 10% discount
}
console.log("--- Assignment 7: Shopping ---");
console.log("Final Bill:", bill - discount);
console.log("--------------------------------\n");

// --- Assignment 8: BMI Calculator ---
let weight = 70, height = 1.75;
let bmi = weight / (height * height);
console.log("--- Assignment 8: BMI ---");
console.log("Your BMI is:", bmi.toFixed(2));
console.log("--------------------------------\n");

// --- Assignment 9: Even or Odd ---
let x = 15;
console.log("--- Assignment 9: Even/Odd ---");
console.log(x % 2 === 0 ? x + " is Even" : x + " is Odd");
console.log("--------------------------------\n");