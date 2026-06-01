let packages = [
    {
        id: 1,
        packageName: "Goa Vacation",
        location: "Goa",
        days: 5,
        price: 15000
    },
    {
        id: 2,
        packageName: "Manali Adventure",
        location: "Manali",
        days: 6,
        price: 20000
    }
];

// TASK 4
const getAllPackages = (req, res) => res.json(packages);

// BONUS TASK
const searchByLocation = (req, res) => {
    const location = req.query.location;
    if (!location) {
        return res.status(400).json({ message: "Please provide a location query" });
    }
    const result = packages.filter(p => p.location.toLowerCase() === location.toLowerCase());
    res.json(result);
};

// TASK 5
const getPackageById = (req, res) => {
    const id = Number(req.params.id);
    const pkg = packages.find(p => p.id === id);
    if (pkg) res.json(pkg);
    else res.status(404).json({ message: "Package not found" });
};

// TASK 3
const addPackage = (req, res) => {
    const newPackage = req.body;
    newPackage.id = packages.length > 0 ? packages[packages.length - 1].id + 1 : 1;
    packages.push(newPackage);
    res.status(201).json({ message: "Package Added Successfully", data: newPackage });
};

// TASK 6
const updatePackage = (req, res) => {
    const id = Number(req.params.id);
    const index = packages.findIndex(p => p.id === id);
    
    if (index !== -1) {
        packages[index] = { ...packages[index], ...req.body, id }; // id safe rakho
        res.json({ message: "Package Updated", data: packages[index] });
    } else {
        res.status(404).json({ message: "Package not found" });
    }
};

// TASK 7
const deletePackage = (req, res) => {
    const id = Number(req.params.id);
    const initialLength = packages.length;
    packages = packages.filter(p => p.id !== id);
    
    if (packages.length < initialLength) {
        res.json({ message: "Package Deleted" });
    } else {
        res.status(404).json({ message: "Package not found" });
    }
};

module.exports = {
    getAllPackages,
    getPackageById,
    addPackage,
    updatePackage,
    deletePackage,
    searchByLocation
};