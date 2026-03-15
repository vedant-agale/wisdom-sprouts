// --- Assignment 1: Create and Modify an Object ---
console.log("--- Assignment 1: Student Mod ---");
let student = { name: "Vedant", age: 20, grade: "A" };
student.subject = "Math"; // Property Add ki
student.grade = "A+";     // Property Update ki
delete student.age;      // Property Delete ki
console.log("Final Student Object:", student);
console.log("--------------------------------\n");

// --- Assignment 2: Nested Object ---
console.log("--- Assignment 2: Nested Book ---");
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    details: { pages: 200, genre: "Adventure" } // Nested object
};
console.log(`Pages: ${book.details.pages}, Genre: ${book.details.genre}`);
console.log("--------------------------------\n");

// --- Assignment 3: Loop Through an Object ---
console.log("--- Assignment 3: Product Inventory ---");
let product = { name: "Laptop", price: 50000, stock: 15 };
for (let key in product) { // for...in loop use kiya
    console.log(`${key}: ${product[key]}`);
}
console.log("--------------------------------\n");

// --- Assignment 4: Calculator Methods ---
console.log("--- Assignment 4: Object Methods ---");
let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
console.log("Addition (45+45):", calculator.add(45, 45)); // Output: 90
console.log("--------------------------------\n");

// --- Assignment 5: Compare Objects ---
console.log("--- Assignment 5: Compare Persons ---");
let person1 = { name: "John", age: 25 };
let person2 = { name: "Doe", age: 30 };
console.log(`Are names same? ${person1.name === person2.name}`);
console.log(`Is Person1 younger than Person2? ${person1.age < person2.age}`);
console.log("--------------------------------\n");

// --- Assignment 6: Mini Task Management ---
console.log("--- Assignment 6: Task Manager ---");
let taskManager = {
    tasks: ["Assignment 1", "Assignment 2"],
    addTask(task) { this.tasks.push(task); },
    showTasks() { console.log("Tasks:", this.tasks.join(", ")); },
    deleteTask() { this.tasks.pop(); },
    updateTask(index, newTask) { this.tasks[index] = newTask; }
};
taskManager.addTask("JavaScript Objects");
taskManager.updateTask(0, "Completed HTML");
taskManager.showTasks();