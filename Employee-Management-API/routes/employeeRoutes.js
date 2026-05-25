const express = require("express");
const router = express.Router();

const {
    getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById,
    getDepartmentWiseEmployee, getJoiningMonthWiseEmployee, getThisMonthBirthdayEmployee,
    searchEmployeeByName, searchEmployeeByCity, sortEmployeesByJoiningDate, sortEmployeesByName,
    getTotalEmployeeCount, getDepartmentWiseCount, getOldestEmployee, getNewestJoinedEmployee, filterEmployeesBetweenDates, getEmployeesByBirthMonth, sortEmployeesByBirthdate
} = require("../controllers/employeeController");

// 1. STATIC & QUERY ROUTES (Must be ABOVE /:id) 

// Advanced Tasks
router.get("/search", searchEmployeeByName);                          // Task 1: ?name=Rahul
router.get("/address/search", searchEmployeeByCity);                  // Task 2: ?city=Pune
router.get("/sort/joining-date", sortEmployeesByJoiningDate);         // Task 3
router.get("/sort/name", sortEmployeesByName);                        // Task 4
router.get("/count/total", getTotalEmployeeCount);                    // Task 5
router.get("/count/department", getDepartmentWiseCount);              // Task 6
router.get("/oldest", getOldestEmployee);                             // Task 7
router.get("/newest-joined", getNewestJoinedEmployee);                // Task 8
router.get("/filter", filterEmployeesBetweenDates);                   // Task 9: ?start=2024-01-01&end=2024-12-31

// Specific Filters
router.get("/birthday/month", getEmployeesByBirthMonth);              // Usage: ?month=5
router.get("/sort/birthdate", sortEmployeesByBirthdate);              // Age wise sorting
router.get("/department/search", getDepartmentWiseEmployee);          // ?department=IT
router.get("/joining/month", getJoiningMonthWiseEmployee);            // ?month=1
router.get("/birthday/current-month", getThisMonthBirthdayEmployee);

// Base GET & POST
router.get("/", getEmployees);
router.post("/", createEmployee);

// 2. DYNAMIC ROUTES (Must be BELOW specific routes) 
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;