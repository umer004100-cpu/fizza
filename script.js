const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Set initial position of NO button
noBtn.style.left = "60%";
noBtn.style.top = "60%";

// Move NO button
function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// YES button clicked
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#ff8fc7,#ffb6d9,#ffd6e8);
            color:white;
            text-align:center;
        ">
            <h1 style="font-size:80px;">YAYYY! 💖</h1>
            <h2 style="font-size:45px;">
                You just made me the happiest person! 🥰
            </h2>
        </div>
    `;
});

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize =
        Math.random() * 30 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);