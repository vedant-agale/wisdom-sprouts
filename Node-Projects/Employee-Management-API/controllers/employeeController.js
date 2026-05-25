let employees = [
    {
        id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", address: "Pune",
        contactNumber: "9876543210", dateOfBirth: "1998-05-12", joiningDate: "2024-01-15", department: "IT"
    },
    {
        id: 2, name: "Priya Patil", email: "priya@gmail.com", address: "Mumbai",
        contactNumber: "9999999999", dateOfBirth: "1997-08-20", joiningDate: "2024-03-10", department: "HR"
    },
    {
        id: 3, name: "Amit Joshi", email: "amit@gmail.com", address: "Nagpur",
        contactNumber: "8888888888", dateOfBirth: "2000-05-25", joiningDate: "2025-05-10", department: "Finance"
    },
    // 🔥 Naye 2 Employees (Neha ka birthday bhi May mein hai)
    {
        id: 4, name: "Neha Verma", email: "neha@gmail.com", address: "Pune",
        contactNumber: "7777777777", dateOfBirth: "1995-05-02", joiningDate: "2023-11-01", department: "IT"
    },
    {
        id: 5, name: "Vikram Singh", email: "vikram@gmail.com", address: "Delhi",
        contactNumber: "6666666666", dateOfBirth: "1992-12-15", joiningDate: "2022-06-20", department: "Finance"
    }
];

// ================= BASIC CRUD OPERATIONS =================
const getEmployeesByBirthMonth = (req, res) => {
    const month = Number(req.query.month);
    const result = employees.filter((e) => {
        const birthMonth = new Date(e.dateOfBirth).getMonth() + 1;
        return birthMonth === month;
    });
    res.json(result);
};

// Employees ko Birthdate ke hisaab se sort karna (Oldest to Youngest age)
const sortEmployeesByBirthdate = (req, res) => {
    const sorted = [...employees].sort((a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth));
    res.json(sorted);
};


const getEmployees = (req, res) => res.json(employees);

const createEmployee = (req, res) => {
    const employee = req.body;
    // Naye employee ko auto ID assign karna
    employee.id = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
    employees.push(employee);
    
    // Ma'am ka demanded message
    res.status(201).json({ 
        message: "Employee added successfully! 🎉", 
        data: employee 
    });
};

const updateEmployee = (req, res) => {
    const id = Number(req.params.id);
    const index = employees.findIndex((e) => e.id === id);
    
    if (index !== -1) {
        // Purane data mein naya data merge kar rahe hain
        employees[index] = { ...employees[index], ...req.body, id }; 
        
        // Ma'am ka demanded message
        res.json({ 
            message: "Employee updated successfully! ✅", 
            data: employees[index] 
        });
    } else {
        res.status(404).json({ message: "Employee not found ❌" });
    }
};

const deleteEmployee = (req, res) => {
    const id = Number(req.params.id);
    const initialLength = employees.length;
    
    // Jiska ID match nahi hota usko rakh lo (matlab match wala delete)
    employees = employees.filter((e) => e.id !== id);
    
    if (employees.length < initialLength) {
        // Ma'am ka demanded message
        res.json({ message: "Employee deleted successfully! 🗑️" });
    } else {
        res.status(404).json({ message: "Employee not found ❌" });
    }
};

const getEmployeeById = (req, res) => {
    const id = Number(req.params.id);
    const employee = employees.find((e) => e.id === id);
    if (employee) res.json(employee);
    else res.status(404).json({ message: "Employee not found" });
};

// SPECIFIC FILTER OPERATIONS

const getDepartmentWiseEmployee = (req, res) => {
    const department = req.query.department;
    const result = employees.filter((e) => e.department.toLowerCase() === department.toLowerCase());
    res.json(result);
};

const getJoiningMonthWiseEmployee = (req, res) => {
    const month = Number(req.query.month);
    const result = employees.filter((e) => {
        const joiningMonth = new Date(e.joiningDate).getMonth() + 1;
        return joiningMonth === month;
    });
    res.json(result);
};

const getThisMonthBirthdayEmployee = (req, res) => {
    const currentMonth = new Date().getMonth() + 1;
    const result = employees.filter((e) => {
        const birthMonth = new Date(e.dateOfBirth).getMonth() + 1;
        return birthMonth === currentMonth;
    });
    res.json(result);
};

//  ADVANCED PRACTICE TASKS (1 to 9) 

// Task 1: Search employee by name
const searchEmployeeByName = (req, res) => {
    const name = req.query.name.toLowerCase();
    const result = employees.filter((e) => e.name.toLowerCase().includes(name));
    res.json(result);
};

// Task 2: Get employees city wise
const searchEmployeeByCity = (req, res) => {
    const city = req.query.city.toLowerCase();
    const result = employees.filter((e) => e.address.toLowerCase() === city);
    res.json(result);
};

// Task 3: Sort employees by joining date (Oldest to Newest)
const sortEmployeesByJoiningDate = (req, res) => {
    const sorted = [...employees].sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
    res.json(sorted);
};

// Task 4: Sort employees by name (A-Z)
const sortEmployeesByName = (req, res) => {
    const sorted = [...employees].sort((a, b) => a.name.localeCompare(b.name));
    res.json(sorted);
};

// Task 5: Get total employee count
const getTotalEmployeeCount = (req, res) => {
    res.json({ totalEmployees: employees.length });
};

// Task 6: Get total employees department wise (Output as Object)
const getDepartmentWiseCount = (req, res) => {
    const deptCount = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {});
    res.json(deptCount);
};

// Task 7: Get oldest employee (By Date of Birth)
const getOldestEmployee = (req, res) => {
    if (employees.length === 0) return res.json({});
    const oldest = [...employees].sort((a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth))[0];
    res.json(oldest);
};

// Task 8: Get newest joined employee
const getNewestJoinedEmployee = (req, res) => {
    if (employees.length === 0) return res.json({});
    const newest = [...employees].sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate))[0];
    res.json(newest);
};

// Task 9: Filter employees between two joining dates
const filterEmployeesBetweenDates = (req, res) => {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const result = employees.filter((e) => {
        const joinDate = new Date(e.joiningDate);
        return joinDate >= startDate && joinDate <= endDate;
    });
    res.json(result);
};

// Export ALL functions
module.exports = {
    getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById,
    getDepartmentWiseEmployee, getJoiningMonthWiseEmployee, getThisMonthBirthdayEmployee,
    searchEmployeeByName, searchEmployeeByCity, sortEmployeesByJoiningDate, sortEmployeesByName,
    getTotalEmployeeCount, getDepartmentWiseCount, getOldestEmployee, getNewestJoinedEmployee, filterEmployeesBetweenDates,getEmployeesByBirthMonth, sortEmployeesByBirthdate
};