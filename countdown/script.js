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
    "music/Chuva de arroz.mp3"
  ];

  // Elementos do DOM
  let msc_index = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("music-title");
  const progress = document.getElementById("progress");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("back-btn");
  let isPlaying = false;

  // Toca a música selecionada e atualiza o título
  function playMusic(music) {
    audio.src = music;
    // Remove a pasta "music/" e a extensão ".mp3" para exibir o título
    title.innerText = music.substring(music.lastIndexOf("/") + 1, music.lastIndexOf("."));
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }

  // Alterna entre play e pause com animação
  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
    updatePlayPauseIcon();
  }

  // Atualiza o ícone do botão play/pause
  function updatePlayPauseIcon() {
    if (isPlaying) {
      playPauseBtn.innerHTML = `<svg class="pause-icon" viewBox="0 0 24 24">
        <rect x="6" y="4" width="4" height="16"/>
        <rect x="14" y="4" width="4" height="16"/>
      </svg>`;
    } else {
      playPauseBtn.innerHTML = `<svg class="play-icon" viewBox="0 0 24 24">
        <polygon points="5,3 19,12 5,21"/>
      </svg>`;
    }
  }

  // Toca a próxima música
  function nextMusic() {
    playMusic(musicList[Math.abs(msc_index++) % musicList.length]);
  }

  function prevMusic() {
    playMusic(musicList[Math.abs(msc_index--) % musicList.length]);
  }

  // Atualiza a barra de progresso de acordo com o tempo atual
  function updateProgress() {
    if (audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progress.style.width = percentage + "%";
    }
  }

  // Eventos para os botões
  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextMusic);
  prevBtn.addEventListener("click", prevMusic)

  // Ao carregar a página, toca uma música aleatória
  window.onload = () => {
    playMusic(nextMusic());
    updatePlayPauseIcon();
    const button = document.querySelectorAll('.animation');

  button[0].addEventListener('click', (e) => {
    e.preventDefault;
    button[0].classList.add('animate');
    setTimeout(() => {
      button[0].classList.remove('animate');
    }, 600);
  });

  button[1].addEventListener('click', (e) => {
    e.preventDefault;
    button[1].classList.add('animate');
    setTimeout(() => {
      button[1].classList.remove('animate');
    }, 600);
  });

  button[2].addEventListener('click', (e) => {
    e.preventDefault;
    button[2].classList.add('animate');
    setTimeout(() => {
      button[2].classList.remove('animate');
    }, 600);
  });
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

