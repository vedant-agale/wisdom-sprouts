// 1. Count words in a sentence
const countWords = (str) => str.trim().split(/\s+/).length;

// 2. Find longest word
const longestWord = (str) => {
    let words = str.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
};

// 3. Remove falsy values
const removeFalsy = (arr) => arr.filter(Boolean);

// 4. Second largest number
const secondLargest = (arr) => {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a); // Sort descending
    return uniqueArr[1];
};

// 5. Sort without built-in sort() (Bubble Sort)
const customSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
};

// Test Examples:
console.log("Words:", countWords("Mission Google 2026 starts now"));
console.log("Longest:", longestWord("Computer Engineering is awesome"));
console.log("Falsy Removed:", removeFalsy([0, 1, false, 2, '', 3, null]));
console.log("2nd Largest:", secondLargest([10, 5, 20, 20, 8]));
console.log("Custom Sort:", customSort([5, 3, 8, 1, 2]));