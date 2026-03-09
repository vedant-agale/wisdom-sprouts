/* ==========================================================
   WISDOM SPROUTS: JS LOOPS & CONTROL STRUCTURES
   ========================================================== */

// --- Exercise 2: Multiplication Table (for loop) ---
console.log("--- Exercise 2: Multiplication Table of 3 ---");
let tableNum = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}
console.log("--------------------------------\n");

// --- Exercise 6: FizzBuzz Problem ---
// Rule: 3 se divide ho toh Fizz, 5 se toh Buzz, dono se toh FizzBuzz
console.log("--- Exercise 6: FizzBuzz (1 to 15) ---");
for (let j = 1; j <= 15; j++) {
    if (j % 3 === 0 && j % 5 === 0) console.log("FizzBuzz");
    else if (j % 3 === 0) console.log("Fizz");
    else if (j % 5 === 0) console.log("Buzz");
    else console.log(j);
}
console.log("--------------------------------\n");

// --- Exercise 8: Star Pattern (Nested Loop) ---
console.log("--- Exercise 8: Star Pattern ---");
for (let row = 1; row <= 5; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
        pattern += "* ";
    }
    console.log(pattern);
}
console.log("--------------------------------\n");

// --- Exercise 18: Fibonacci Sequence (Up to 6 terms) ---
console.log("--- Exercise 18: Fibonacci ---");
let n = 6, first = 0, second = 1;
let sequence = "";
for (let k = 1; k <= n; k++) {
    sequence += first + " ";
    let next = first + second;
    first = second;
    second = next;
}
console.log(sequence);
console.log("--------------------------------\n");

// --- Exercise 10: Factorial of a Number (5! = 120) ---
console.log("--- Exercise 10: Factorial ---");
let fNum = 5;
let fact = 1;
for (let i = 1; i <= fNum; i++) {
    fact *= i; // fact = fact * i
}
console.log(`Factorial of ${fNum} is: ${fact}`);
console.log("--------------------------------\n");

// --- Exercise 12: Check Prime Number ---
console.log("--- Exercise 12: Prime Check ---");
let pNum = 7;
let isPrime = true;
if (pNum <= 1) isPrime = false;
for (let i = 2; i < pNum; i++) {
    if (pNum % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${pNum} is Prime? ${isPrime}`);
console.log("--------------------------------\n");

// --- Exercise 14: Sum of Digits (e.g., 123 = 1+2+3 = 6) ---
console.log("--- Exercise 14: Sum of Digits ---");
let sNum = 456;
let sum = 0;
let tempSum = sNum;
while (tempSum > 0) {
    sum += tempSum % 10; // Last digit nikaala
    tempSum = Math.floor(tempSum / 10); // Number ko chota kiya
}
console.log(`Sum of digits of 456 is: ${sum}`);
console.log("--------------------------------\n");

// --- Exercise 16: Palindrome Number (121 stays 121) ---
console.log("--- Exercise 16: Palindrome Check ---");
let original = 121;
let reverse = 0;
let tempPal = original;
while (tempPal > 0) {
    let lastDigit = tempPal % 10;
    reverse = (reverse * 10) + lastDigit;
    tempPal = Math.floor(tempPal / 10);
}
console.log(`Is ${original} a Palindrome? ${original === reverse}`);
console.log("--------------------------------\n");

// --- Exercise 20: Armstrong Number (153 = 1³+5³+3³)  ---
console.log("--- Exercise 20: Armstrong Number ---");
let armNum = 153;
let armSum = 0;
let tempArm = armNum;
while (tempArm > 0) {
    let digit = tempArm % 10;
    armSum += digit ** 3; // digit ka cube
    tempArm = Math.floor(tempArm / 10);
}
console.log(`Is ${armNum} an Armstrong number? ${armNum === armSum}`);
console.log("--------------------------------\n");