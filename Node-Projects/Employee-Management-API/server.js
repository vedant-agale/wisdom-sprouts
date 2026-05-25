const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import Routes
const employeeRoute = require("./routes/employeeRoutes");

// Use Routes
app.use("/employees", employeeRoute);

// Server listen karega
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});