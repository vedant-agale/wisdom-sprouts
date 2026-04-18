// Task 1: Reverse Each Word in a Sentence
function reverseWords(sentence) {
    return sentence.split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Task 2: Word Frequency Counter (Normalization & Punctuation Strip)
function countWordFrequency(text) {
    const cleanText = text.toLowerCase().replace(/[^\w\s]/g, '');
    const words = cleanText.split(/\s+/);
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

// Task 3: Filter Users by Age (Strictly Greater Than 18)
function filterAdults(users) {
    return users.filter(user => user.age > 18);
}

// Task 4: Sort Products by Price (Ascending Order)
function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

// Task 5: URL Slug Generator (Lowercase, No Specials, Hyphens)
function generateSlug(title) {
    return title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

// Task 6: Group Words by Length
function groupByLength(words) {
    return words.reduce((acc, word) => {
        const len = word.length;
        if (!acc[len]) acc[len] = [];
        acc[len].push(word);
        return acc;
    }, {});
}

// Task 7: Debounce Utility Function
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Task 8: Deep Copy of an Object (Nested Cloning)
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Task 9: Sequential Asynchronous Tasks (One After Another)
async function runTasksSequentially() {
    const simulateTask = (name) => {
        return new Promise(resolve => {
            const delay = Math.random() * 1500 + 500;
            setTimeout(() => {
                console.log(`${name} completed`);
                resolve();
            }, delay);
        });
    };

    await simulateTask("Task A");
    await simulateTask("Task B");
    await simulateTask("Task C");
    console.log("All tasks completed");
}

// Task 10: Simple Calculator (Operator Precedence Support)
function simpleCalculator(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (e) {
        return "Invalid Expression";
    }
}