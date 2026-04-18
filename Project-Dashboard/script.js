const apiURL = "https://674e84f11635bad45618eebc1.mockapi.io/api/v1/projects";
let allProjects = [];
let filteredProjects = [];
let currentPage = 1;
const rowsPerPage = 5;
let isAscending = true;

// Elements
const tableBody = document.querySelector("#tableBody");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const spinner = document.querySelector("#loadingSpinner");
const table = document.querySelector("#projectTable");
const noData = document.querySelector("#noDataMessage");
const pagination = document.querySelector("#pagination");
const sortBtn = document.querySelector("#sortBtn");

// 1. Fetch Data
async function fetchProjects() {
    try {
        const response = await fetch(apiURL);

        // Check karo ki response sahi hai ya nahi
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        allProjects = await response.json();
        
        // Agar API khali ho toh dummy data
        if (allProjects.length === 0) {
            loadDummyData();
        }

    } catch (error) {
        console.error("Fetch Error:", error.message);
        // Server down hone par fallback dummy data
        loadDummyData();
    } finally {
        spinner.classList.add("d-none");
        table.classList.remove("d-none");
        renderDashboard();
    }
}

function loadDummyData() {
    console.log("Using Fallback Data...");
    allProjects = [
        { id: 1, name: "ApnaBazaar E-comm", description: "Java Spring Boot project.", status: "Completed" },
        { id: 2, name: "Weather App", description: "Glassmorphism UI project.", status: "Completed" },
        { id: 3, name: "Task Manager", description: "CRUD operations using JS.", status: "Pending" }
    ];
    filteredProjects = [...allProjects];
}

// 2. Filter & Search Integration
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    filteredProjects = allProjects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm);
        const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    currentPage = 1; // Reset to first page on new search
    renderDashboard();
}

// 3. Render Table & Pagination
function renderDashboard() {
    tableBody.innerHTML = "";
    
    // Pagination logic
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = filteredProjects.slice(start, end);

    if (paginatedItems.length === 0) {
        table.classList.add("d-none");
        noData.classList.remove("d-none");
    } else {
        table.classList.remove("d-none");
        noData.classList.add("d-none");
        
        paginatedItems.forEach(item => {
            const badgeClass = item.status === "Completed" ? "bg-completed" : "bg-pending";
            tableBody.innerHTML += `
                <tr>
                    <td>#${item.id}</td>
                    <td class="fw-bold text-dark">${item.name}</td>
                    <td class="text-secondary">${item.description}</td>
                    <td><span class="badge-status ${badgeClass}">${item.status}</span></td>
                </tr>
            `;
        });
    }
    renderPagination();
}

// 4. Pagination Buttons
function renderPagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(filteredProjects.length / rowsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement("li");
        btn.className = `page-item ${i === currentPage ? 'active' : ''}`;
        btn.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = i;
            renderDashboard();
        });
        pagination.appendChild(btn);
    }
}

// 5. Bonus: Sorting
sortBtn.addEventListener("click", () => {
    filteredProjects.sort((a, b) => {
        return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    isAscending = !isAscending;
    renderDashboard();
});

// Event Listeners
searchInput.addEventListener("input", applyFilters);
statusFilter.addEventListener("change", applyFilters);

// Initial Call
fetchProjects();