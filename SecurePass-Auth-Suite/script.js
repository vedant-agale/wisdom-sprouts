// --- 1. REGISTRATION LOGIC ---
function handleRegistration() {
    const user = document.getElementById('regUser').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value;
    const repeat = document.getElementById('regRepeat').value;

    // Strict Checks
    if (user === "" || email === "" || pass === "") {
        alert("Bhai, saare khali dabbo ko bharo pehle!");
        return;
    }

    if (pass !== repeat) {
        alert("Passwords match nahi kar rahe hain!");
        return;
    }

    const userData = { email, password: pass, username: user };
    localStorage.setItem('B81_User', JSON.stringify(userData));

    alert("🎉 Registration Successful! Ab Login karo.");
    window.location.href = 'index.html';
}

// --- 2. LOGIN LOGIC ---
function handleLogin() {
    const emailInput = document.getElementById('loginEmail').value.trim();
    const passInput = document.getElementById('loginPass').value;
    const stored = JSON.parse(localStorage.getItem('B81_User'));

    // Fix: Check for empty inputs
    if (emailInput === "" || passInput === "") {
        alert("Email aur password likhna bhool gaye?");
        return;
    }

    if (!stored) {
        alert("Arey bhai, pehle Register toh kar lo!");
        return;
    }

    // Strict Match
    if (emailInput === stored.email && passInput === stored.password) {
        alert("Sahi hai! Swagat hai, " + stored.username);
        window.location.href = 'generator.html';
    } else {
        alert("Invalid Email or Password. Phirse check karo!");
    }
}

// --- 3. GENERATOR LOGIC (MAM'S STYLE) ---
function generateAdvancedPassword() {
    const length = document.getElementById("length").value;
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("includeNumbers").checked) charset += "0123456789";
    if (document.getElementById("includeUppercase").checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("includeSpecial").checked) charset += "!@#$%^&*()_+";

    if (document.getElementById("excludeAmbiguous").checked) {
        charset = charset.replace(/[l1I0O]/g, "");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById("result").value = password;
    evaluateStrength(password);
}

// Strength Meter & UI Toggles
function evaluateStrength(password) {
    const bar = document.getElementById("strengthBar");
    const text = document.getElementById("strengthText");
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    bar.style.width = (score * 25) + "%";
    const status = ["Weak", "Medium", "Strong", "Very Strong"];
    const colors = ["bg-danger", "bg-warning", "bg-info", "bg-success"];
    text.innerText = status[score-1] || "Too Weak";
    bar.className = "progress-bar " + (colors[score-1] || "bg-dark");
}

function togglePasswordVisibility() {
    const res = document.getElementById("result");
    res.type = res.type === "password" ? "text" : "password";
}

function copyPassword() {
    const res = document.getElementById("result");
    res.select();
    document.execCommand("copy");
    alert("Copied!");
}