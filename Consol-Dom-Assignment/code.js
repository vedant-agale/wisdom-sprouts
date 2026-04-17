// Step 1: Set Background Color
document.body.style.backgroundColor = "#282c34"; // Dark background

// Step 2: Add an Image to the Page
let img = document.createElement("img");
img.src = "https://picsum.photos/1600/900"; // Updated link kyunki Unsplash placeholder kabhi kabhi slow hota hai
img.style.width = "100vw";
img.style.height = "50vh";
img.style.objectFit = "cover";
img.style.display = "block";
img.style.margin = "0 auto";
document.body.appendChild(img);

// Step 3: Add a Styled Heading
let heading = document.createElement("h1");
heading.textContent = "Welcome to My Dynamic Page";
heading.style.color = "white";
heading.style.textAlign = "center";
heading.style.fontSize = "2.5rem";
heading.style.marginTop = "20px";
document.body.appendChild(heading);

// Step 4: Add a Beautiful Paragraph
let para = document.createElement("p");
para.textContent = "This page is fully created using JavaScript in the console!";
para.style.color = "#ddd";
para.style.fontSize = "1.2rem";
para.style.textAlign = "center";
para.style.maxWidth = "600px";
para.style.margin = "20px auto";
para.style.lineHeight = "1.6";
document.body.appendChild(para);

// Step 5: Add a Styled Button
let button = document.createElement("button");
button.textContent = "Click Me";
button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "12px 24px";
button.style.fontSize = "1.2rem";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#ff9800";
button.style.color = "white";
button.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
document.body.appendChild(button);

// Step 6: Add a Hover Effect to the Button
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#e65100";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#ff9800";
});

// Step 7: Create a Card with Box Shadow
let card = document.createElement("div");
card.style.width = "300px";
card.style.margin = "20px auto";
card.style.padding = "20px";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
card.style.backgroundColor = "#333";
card.style.textAlign = "center";
document.body.appendChild(card);

let cardTitle = document.createElement("h2");
cardTitle.textContent = "JavaScript Rocks!";
cardTitle.style.color = "#ff9800";
card.appendChild(cardTitle);

let cardText = document.createElement("p");
cardText.textContent = "This card was created using JavaScript!";
cardText.style.color = "white";
cardText.style.fontSize = "1rem";
cardText.style.marginTop = "10px";
card.appendChild(cardText);

// Step 8: Make the Page Responsive
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.minHeight = "100vh"; // Image se thoda update kiya taaki scrolling sahi rahe
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
//done