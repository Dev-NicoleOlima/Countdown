function updateCountdown(targetDate, elementId, callback) {
    function calculateTime() {
        let now = new Date();
        let difference = targetDate - now;

        if (difference <= 0) {
            callback();
            return;
        }

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    calculateTime();
    setInterval(calculateTime, 1000);
}

const musicList = [
    "music/Escreve ai.mp3",
];

const audio = document.getElementById("audio");
const title = document.getElementById("music-title");
const progress = document.getElementById("progress");

function getRandomMusic() {
    return musicList[Math.floor(Math.random() * musicList.length)];
}

function playMusic(music) {
    audio.src = music;

    title.innerText = music.substring(6).split(".")[0];
    audio.play();
}

function nextMusic() {
    playMusic(getRandomMusic());
}

function updateProgress() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + "%";
}

// Toca uma música aleatória ao carregar
window.onload = () => {
    playMusic(getRandomMusic());
};

// Contagem regressiva para 8 de maio de 2025
let may8_2025 = new Date("May 8, 2025 00:00:00").getTime();
updateCountdown(may8_2025, "countdownHeader", () => {
    document.getElementById("countdownHeader").innerText = "Chegou o dia!";
});

function updateAnniversaryCountdown() {
    let now = new Date();
    let targetDate = new Date(`August 23, ${now.getFullYear()} 00:00:00`).getTime();
    if (now > targetDate) {
        targetDate = new Date(`August 23, ${now.getFullYear() + 1} 00:00:00`).getTime();
    }
    
    updateCountdown(targetDate, "countdownSection", () => {
        document.getElementById("countdownSection").innerText = "1 ano de namoro!";
        setTimeout(updateAnniversaryCountdown, 5000);
    });
}

updateAnniversaryCountdown();

