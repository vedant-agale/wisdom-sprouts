// 1. IMAGE SLIDER LOGIC (Practice: Arrays, setInterval)

const images = [
    "https://picsum.photos/id/10/800/400",
    "https://picsum.photos/id/20/800/400",
    "https://picsum.photos/id/30/800/400"
];
let currentIndex = 0;
const sliderImg = document.getElementById("sliderImg");

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    sliderImg.src = images[currentIndex];
}

document.getElementById("nextBtn").addEventListener("click", () => showImage(currentIndex + 1));
document.getElementById("prevBtn").addEventListener("click", () => showImage(currentIndex - 1));

// Bonus: Auto-slide every 3 seconds
setInterval(() => showImage(currentIndex + 1), 3000);


// 2. DIGITAL CLOCK (Practice: Date object, setInterval)

setInterval(() => {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}, 1000);



// 3. COUNTDOWN TIMER (Practice: setInterval, clearInterval)

let timerInterval;
function startCountdown() {
    let seconds = parseInt(document.getElementById("timerInput").value);
    const display = document.getElementById("countdownDisplay");

    if (isNaN(seconds) || seconds <= 0) return alert("Sahi Number To Daal, Brother!");

    clearInterval(timerInterval); // Purana timer reset karo
    
    timerInterval = setInterval(() => {
        display.textContent = `${seconds}s`;
        seconds--;

        if (seconds < 0) {
            clearInterval(timerInterval);
            display.textContent = "Time's Up!";
        }
    }, 1000);
}


// 4. ASYNC/AWAIT DEMO (Bonus: Fetch API with Error Handling)
async function testAsyncLogic() {
    try {
        console.log("Fetching user...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Network response was not ok");
        let user = await response.json();
        console.log("User Loaded:", user.name);
    } catch (err) {
        console.error("Failed to fetch user:", err);
    }
}
testAsyncLogic();