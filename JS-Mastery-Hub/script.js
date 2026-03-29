// --- 1. To-Do Logic ---
function addTodo() {
    const input = document.getElementById('todoInput');
    if (!input.value) return alert("Kuch toh likho!");
    
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center bg-transparent text-inherit border-0 ps-0";
    li.innerHTML = `
        <span onclick="this.classList.toggle('completed')">${input.value}</span>
        <i class="fas fa-trash text-danger" onclick="this.parentElement.remove()" style="cursor:pointer"></i>
    `;
    document.getElementById('todoList').appendChild(li);
    input.value = "";
}

// --- 2. Form & 6. Strength Checker ---
function checkStrength(pass) {
    const bar = document.getElementById('strengthBar');
    let strength = 0;
    if (pass.length > 6) strength += 40;
    if (/[A-Z]/.test(pass)) strength += 30;
    if (/[!@#$%^&*]/.test(pass)) strength += 30;

    bar.style.width = strength + "%";
    bar.className = `progress-bar ${strength < 50 ? 'bg-danger' : strength < 100 ? 'bg-warning' : 'bg-success'}`;
}

function validateForm() {
    const name = document.getElementById('valName').value;
    const email = document.getElementById('valEmail').value;
    const pass = document.getElementById('valPass').value;

    if (!name) return alert("Name missing!");
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert("Email invalid!");
    if (pass.length < 6) return alert("Password must be 6+ chars!");
    
    alert("🎉 Validation Success!");
}

// --- 3. Theme Toggle ---
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#themeToggle i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// --- 4. Counter with LocalStorage ---
let count = localStorage.getItem('myCount') || 0;
document.getElementById('counterVal').innerText = count;

function updateCounter(val) {
    if (val === 'reset') count = 0;
    else count = parseInt(count) + val;
    
    localStorage.setItem('myCount', count);
    document.getElementById('counterVal').innerText = count;
}

// --- 5. Modal Logic ---
function toggleModal(show) {
    document.getElementById('customModal').style.display = show ? 'flex' : 'none';
}