const messages = [
    "Are you sure?",
    "Pookie please...",
    "What if I promise to always share my fries? 🍟",
    "Ok but wait... what if I sing a song for you? 🎵", 
    "But… do you really want to break my heart? 🥺",
    "Come on, you know you want to! 😘",
    "I brought snacks and good vibes, just say yes.",
    "I’ll give you unlimited cuddles if you say yes! 🤗"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}