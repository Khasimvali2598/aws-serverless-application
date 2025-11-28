// Greeting functionality
const form = document.getElementById("greetForm");
const greeting = document.getElementById("greeting");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    greeting.textContent = name ? `Hello, ${name}! 🎉` : "";
});

// View Counter (AWS Lambda URL)
const counterElement = document.getElementById("viewCount");

async function updateCounter() {
    try {
        const res = await fetch("YOUR_LAMBDA_URL_HERE");
        const data = await res.json();
        counterElement.textContent = `Total Views: ${data.views}`;
    } catch (error) {
        counterElement.textContent = "Unable to load views";
        console.error(error);
    }
}

updateCounter();
