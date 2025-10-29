const text = "Hello World!";
const typingContainer = document.getElementById("typing");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:'\",.<>?/ ";

function scrollLetter(letter) {
    return new Promise((resolve) => {
        const span = document.createElement("span");
        span.className = "letter";
        typingContainer.appendChild(span);

        if (letter === " ") {
            span.textContent = " ";
            resolve();
            return;
        }

        let index = 0;
        const interval = setInterval(() => {
            span.textContent = chars[index];
            if (chars[index] === letter) {
                clearInterval(interval);
                resolve();
            } else {
                index = (index + 1) % chars.length;
            }
        }, 100);
    });
}

async function typeText() {
    for (let i = 0; i < text.length; i++) {
        await scrollLetter(text[i]);
    }
}

typeText();