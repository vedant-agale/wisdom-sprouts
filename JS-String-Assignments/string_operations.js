// 1. Count Vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log("1. Vowels in 'Hello World':", countVowels("Hello World"));

// 2. Palindrome Checker
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str.toLowerCase() === reversed.toLowerCase();
}
console.log("2. Is 'radar' a palindrome?", isPalindrome("radar"));

// 3. Extract First Word
function getFirstWord(sentence) {
    return sentence.split(" ")[0];
}
console.log("3. First word of 'JavaScript is fun':", getFirstWord("JavaScript is fun"));

// 4. Replace Spaces with Hyphens
function replaceSpaces(str) {
    return str.replaceAll(" ", "-");
}
console.log("4. Hyphenated:", replaceSpaces("Hello World from JS"));

// 5. Split into Array
function splitIntoWords(sentence) {
    return sentence.split(" ");
}
console.log("5. Array of words:", splitIntoWords("This is JavaScript"));

// 6. Capitalize First Letter of Each Word
function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log("6. Capitalized:", capitalizeWords("hello world from vedant"));

// 7. Reverse String Manually
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("7. Manual Reverse 'Google':", reverseString("Google"));

// 8. Count Specific Character
function countCharacter(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log("8. Occurrences of 'o' in 'hello world':", countCharacter("hello world", "o"));

// 9. Remove Non-Alphanumeric
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-z0-9]/gi, ""); // RegEx use kiya hai simple banane ke liye
}
console.log("9. Cleaned String:", removeNonAlphanumeric("Hello, World! 123."));

// 10. Starts and Ends with Same Character
function startsAndEndsSame(str) {
    if (str.length === 0) return false;
    return str[0].toLowerCase() === str[str.length - 1].toLowerCase();
}
console.log("10. Starts/Ends same ('radar')?", startsAndEndsSame("radar"));