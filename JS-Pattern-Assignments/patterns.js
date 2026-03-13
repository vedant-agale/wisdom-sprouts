// 1. Square of Asterisks
function printSquare(n) {
    console.log(`Task 1: Square (${n}x${n})`);
    for (let i = 0; i < n; i++) {
        console.log("* ".repeat(n));
    }
    console.log("");
}

// 2. Right-Angled Triangle
function printTriangle(n) {
    console.log(`Task 2: Right-Angled Triangle`);
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(i));
    }
    console.log("");
}

// 3. Inverted Right-Angled Triangle
function printInvertedTriangle(n) {
    console.log(`Task 3: Inverted Triangle`);
    for (let i = n; i >= 1; i--) {
        console.log("* ".repeat(i));
    }
    console.log("");
}

// 4. Centered Pyramid
function printPyramid(n) {
    console.log(`Task 4: Centered Pyramid`);
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "* ".repeat(i);
        console.log(spaces + stars);
    }
    console.log("");
}

// 5. Diamond Pattern
function printDiamond(n) {
    console.log(`Task 5: Diamond Pattern`);
    // Upper part
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }
    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }
    console.log("");
}

// 6. Number Pyramid
function printNumberPyramid(n) {
    console.log(`Task 6: Number Pyramid`);
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + (i + " ").repeat(i));
    }
    console.log("");
}

// 8. Hollow Square
function printHollowSquare(n) {
    console.log(`Task 8: Hollow Square`);
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
            console.log("* ".repeat(n));
        } else {
            console.log("* " + "  ".repeat(n - 2) + "*");
        }
    }
    console.log("");
}

// 10. Zig-Zag Pattern
function printZigZag(n) {
    console.log(`Task 10: Zig-Zag Pattern`);
    for (let i = 1; i <= 3; i++) {
        let line = "";
        for (let j = 1; j <= n; j++) {
            if (((i + j) % 4 === 0) || (i === 2 && j % 4 === 0)) {
                line += "* ";
            } else {
                line += "  ";
            }
        }
        console.log(line);
    }
    console.log("");
}

// --- Sabhi patterns ko run karein ---
printSquare(5);
printTriangle(5);
printInvertedTriangle(5);
printPyramid(5);
printDiamond(5);
printNumberPyramid(4);
printHollowSquare(5);
printZigZag(13);