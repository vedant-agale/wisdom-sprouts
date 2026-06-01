const express = require("express");
const router = express.Router();

const {
    getAllPackages,
    getPackageById,
    addPackage,
    updatePackage,
    deletePackage,
    searchByLocation
} = require("../controllers/packageController");

// Bonus Task
router.get("/search", searchByLocation);

// Task 3 & 4
router.get("/", getAllPackages);
router.post("/", addPackage);

// Task 5, 6 & 7
router.get("/:id", getPackageById);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

module.exports = router;