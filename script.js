document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
        {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/RockAndRollLullaby-BJThomas.mp3",
      name: "Rock And Roll Lullaby",
      artist: "BJ Thomas",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/RockAndRollLullaby-BJThomas.jpg",
      description: "B. J. Thomas. Lançada em 1972, é uma das baladas mais emocionantes do rock/pop da época. A música tem uma melodia suave e nostálgica, com um arranjo que mistura o rock clássico com elementos de gospel e doo-wop. A letra conta a história de um menino criado por uma mãe solteira, que encontra conforto nas canções de ninar que ela cantava para ele.",
      options: [
        { name: "Bridge Over Troubled Water", artist: "George McCrae" },
        { name: "Rock And Roll Lullaby", artist: "BJ Thomas" },
        { name: "I Am Woman", artist: "Stealers Wheel" },
        { name: "Take Me Home", artist: "Smokey Robinson & The Miracles" }
      ] 
          
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/AloneAgainNaturally-GilbertOSullivan.mp3",
      name: "Alone Again (Naturally)",
      artist: "Gilbert O'Sullivan",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/AloneAgainNaturally-GilbertOSullivan.jpg",
      description: "Gilbert O'Sullivan (1972): Uma balada melancólica e introspectiva que aborda temas de solidão e perda, com uma melodia suave contrastando com a letra triste. A interpretação sincera de Gilbert O’Sullivan fez dela um grande sucesso nos anos 70.",
      options: [
        { name: "Play That Funky Music", artist: "Wild Cherry" },
        { name: "Because", artist: "The Dave Clark Five" },
        { name: "If", artist: "Bread" },
        { name: "Alone Again (Naturally)", artist: "Gilbert O'Sullivan" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/AmericanPie-DonMcLean.mp3",
      name: "American Pie",
      artist: "Don McLean",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/AmericanPie-DonMcLean.jpg",
      description: "(1971): Uma das composições mais emblemáticas da música folk-rock, American Pie é um épico de oito minutos que faz referências enigmáticas à cultura americana e à tragédia do The Day the Music Died (a morte de Buddy Holly, Ritchie Valens e Big Bopper em 1959).",
      options: [
        { name: "Daniel", artist: "Elton John" },
        { name: "American Pie", artist: "Don McLean" },
        { name: "Let’s Stay Together", artist: "Supertramp" },
        { name: "Living for the City", artist: "James Taylor" }
        
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/Angie-TheRollingStones.mp3",
      name: "Angie",
      artist: "The Rolling Stones",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/Angie-TheRollingStones.jpg",
      description: "(1973):  Uma das baladas mais famosas dos Rolling Stones, Angie tem uma melodia delicada e emotiva, com um solo de guitarra inesquecível e a interpretação melancólica de Mick Jagger. Embora haja especulações sobre a inspiração da música, Keith Richards afirmou que o nome foi escolhido aleatoriamente.",
      options: [
        { name: "Angie", artist: "The Rolling Stones" },
        { name: "Free Bird", artist: "Lynyrd Skynyrd" },
        { name: "Don't Stop Believin", artist: "Journey" },
        { name: "Angel Of Mine", artist: "Mark Davis" }
      ] 
      
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/AnotherBrickintheWall-PinkFloyd.mp3",
      name: "Another Brick in the Wall",
      artist: "PinkFloyd",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/AnotherBrickintheWall-PinkFloyd.jpg",
      description: "(1979): Um dos maiores sucessos do Pink Floyd, essa música faz parte do álbum The Wall e critica o sistema educacional rígido e opressor. A icônica linha We don’t need no education virou um hino de rebeldia, impulsionado pelo uso inovador de um coral infantil.",
      options: [
        { name: "Living for the City", artist: "The Rolling Stones" },
        { name: "The Way We Were", artist: "The Everly Brothers" },
        { name: "Another Brick in the Wall", artist: "PinkFloyd" },
        { name: "I Shot the Sheriff", artist: "The Doobie Brothers" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/BabyILoveYourWay-PeterFrampton.mp3",
      name: "Baby I Love Your Way",
      artist: "Peter Frampton",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/BabyILoveYourWay-PeterFrampton.jpg",
      description: "(1975): Uma das músicas mais românticas da década de 70, com uma melodia envolvente e a voz suave de Peter Frampton. Lançada no álbum Frampton Comes Alive!, se tornou uma das canções mais pedidas em rádios e regravada diversas vezes ao longo dos anos.",
      options: [
        { name: "Baby I Love Your Way", artist: "Peter Frampton" },
        { name: "Rock Your Baby", artist: "Led Zeppelin" },
        { name: "Can’t Get Enough of Your Love, Babe", artist: "Heatwave" },
        { name: "If I Can’t Have You", artist: "Steppenwolf" }        
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/BadMoonRising-CreedenceClearwaterRevival.mp3",
      name: "Bad Moon Rising",
      artist: "Creedence Clearwater Revival",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/BadMoonRising-CreedenceClearwaterRevival.jpg",
      description: "(1969):  Um rock enérgico e cativante, apesar de sua letra sombria que fala sobre presságios de destruição. A interpretação marcante de John Fogerty e o ritmo acelerado fizeram dessa canção um clássico do rock.",
      options: [
        { name: "The Joker", artist: "Gerry Rafferty" },
        { name: "Band on the Run", artist: "The Who" },
        { name: "If I Can’t Have You", artist: "The Dave Clark Five" },
        { name: "Bad Moon Rising", artist: "Creedence Clearwater Revival" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/MamyBlue-RickyShayne.mp3",
      name: "Mamy Blue",
      artist: "Ricky Shayne",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/MamyBlue-RickyShayne.jpg",
      description: "Ricky Shayne: Esta música foi originalmente composta pelo francês Hubert Giraud e gravada pela banda espanhola Pop-Tops, mas ganhou versões em vários idiomas e intérpretes diferentes. Uma das mais conhecidas foi a do cantor Ricky Shayne, que lançou sua versão em alemão e inglês, tornando a canção um grande sucesso na Europa.",
      options: [
        { name: "Rainbow", artist: "John Paul Young" },
        { name: "Mamy Blue", artist: "Ricky Shayne" },
        { name: "I Feel Love", artist: "Billy Joel" },
        { name: "Please Mr. Postman", artist: "Free" }        
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/RainRainRain-SimonButterfly.mp3",
      name: "Rain, Rain, Rain",
      artist: "Simon Butterfly",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/RainRainRain-SimonButterfly.jpg",
      description: "(1973):  Uma canção nostálgica e sentimental que se destacou na década de 70. Seu tom melancólico e melodia suave fizeram dela uma das músicas queridas pelos ouvintes da época, embora Simon Butterfly tenha sido um artista de poucos sucessos.",
      options: [
        { name: "My love for ", artist: "The Hollies" },
        { name: "Serenade to Cripton", artist: "Booker T. & the MG’s" },
        { name: "Blue Moon", artist: "Buffalo Springfield" },
        { name: "Rain, Rain, Rain", artist: "Simon Butterfly" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica2inter/skylinepigeon_eltonjohn.mp3",
      name: "Skyline Pigeon",
      artist: "Elton John",
      image: "https://radialistaedsonleite.github.io/qualeamusica2inter/skylinepigeon_eltonjohn.jpg",
      description: "(1969): Essa bela canção, presente no álbum Empty Sky (1969), foi uma das primeiras composições de sucesso da parceria entre Elton John e Bernie Taupin. A música fala sobre liberdade e o desejo de voar para longe, usando a metáfora de um pombo no céu. Curiosidade: Elton John gravou duas versões dessa música. A mais conhecida é a de 1973, regravada com um arranjo emocionante no piano (em vez do cravo usado na versão original).",
      options: [
        { name: "I Will Survive", artist: "The Emotions" },
        { name: "Skyline Pigeon", artist: "Elton John" },
        { name: "Stayin' Alive", artist: "The Kinks" },
        { name: "More Than a Woman", artist: "Barry Manilow" }
      ] 
    },
        
  ];

  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Clique no play, ouça e responda!";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = `<strong>${option.name}</strong><br><i>${option.artist}</i>`;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option.name, option.artist);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(selectedName, selectedArtist) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (selectedName === q.name && selectedArtist === q.artist) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.innerHTML = `
      <h1 style="color: red; font-weight: bold; font-size: 1.5em;">Parabéns! Você já está com ${score} pontos!</h1>
      <div>${generateFinalComments()}</div>
      <div class="buttons-container">
          <button id="restart-btn">Jogar Novamente</button>
          <button id="exit-btn">Fechar o Jogo</button>
      </div>
    `;

    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function generateFinalComments() {
  return questions
    .map(
      (q) => `
        <div style="margin-bottom: 5px; text-align: center;">
          <p>↴  ↴  ↴</p> <!-- Aqui está o texto com os asteriscos -->
          <strong>${q.name} - ${q.artist}</strong>
          <img src="${q.image}" alt="${q.name}" style="width: ${IMAGE_SIZE}px; height: ${IMAGE_SIZE}px; display: block; margin: 5px auto;">
          <p>${q.description}</p>
        </div>
      `
    )
    .join("");
}


  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0;
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }

  function exitGame() {
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML";
  }

  scoreText.textContent = `Pontuação: ${score}`; // Exibe a pontuação ao iniciar
  loadQuestion();
});
