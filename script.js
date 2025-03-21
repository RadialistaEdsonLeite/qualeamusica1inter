document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3",
      name: "Don't Let Me Down",
      artist: "The Hollies",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.jpg",
      description: "The Hollies: Don't Let Me Down – The Hollies (1969): Escrita por Tony Hicks, Allan Clarke e Terry Sylvester, essa música é um dos clássicos da banda, mas não deve ser confundida com a famosa canção dos Beatles com o mesmo nome.",
      options: [
        { name: "Don't Let Me Down", artist: "The Hollies" },
        { name: "Behind Blue Eyes", artist: "The Who" },
        { name: "I Wanna Be Your Lover", artist: "Prince" },
        { name: "I Wish", artist: "Stevie Wonder" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.mp3",
      name: "I Never Cry",
      artist: "Alice Cooper",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.jpg",
      description: "Alice Cooper: I Never Cry – Alice Cooper (1976): Alice Cooper escreveu essa balada emocional sobre sua luta contra o alcoolismo. Diferente de seu estilo chocante habitual, essa música é uma das mais sentimentais de sua carreira.",
      options: [
        { name: "People Are Strange", artist: "The Doors" },
        { name: "Smoke on the Water", artist: "Deep Purple" },
        { name: "I Never Cry", artist: "Alice Cooper" },
        { name: "The Only Living Boy in New York", artist: "Simon & Garfunkel" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.mp3",
      name: "I Started A Joke",
      artist: "Bee Gees",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.jpg",
      description: "Bee Gees: I Started a Joke – Bee Gees (1968): Robin Gibb revelou que a inspiração para essa música veio durante um voo de avião. A letra melancólica e introspectiva fez dela um dos maiores sucessos da banda.",
      options: [
        { name: "You Make Me Feel Like Dancing", artist: "Leo Sayer" },
        { name: "I Started A Joke", artist: "Bee Gees" },
        { name: "What's Going On", artist: "Marvin Gaye" },
        { name: "Lean on Me", artist: "Bill Withers" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.mp3",
      name: "It's A Heartache",
      artist: "Bonnie Tyler",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.jpg",
      description: "Bonnie Tyler: It's a Heartache – Bonnie Tyler (1977):🔹 Essa música foi um grande sucesso global, mas poucos sabem que Bonnie Tyler gravou sua versão enquanto se recuperava de uma cirurgia nas cordas vocais, o que deu um toque ainda mais rouco à sua voz.",
      options: [
        { name: "Love to Love You Baby", artist: "Donna Summer" },
        { name: "Le Freak", artist: "Chic" },
        { name: "Heart of Glass", artist: "Blondie" },
        { name: "It's A Heartache", artist: "Bonnie Tyler" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.mp3",
      name: "Loves Hurts",
      artist: "Nazareth",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.jpg",
      description: "Nazareth: Love Hurts – Nazareth (1975):🔹 Originalmente gravada pelos Everly Brothers em 1960, a versão do Nazareth se tornou a mais famosa e um hino das baladas de rock.",
      options: [
        { name: "You Make Me Feel Like Dancing", artist: "Leo Sayer" },
        { name: "Rhinestone Cowboy", artist: "Glen Campbell" },
        { name: "Loves Hurts", artist: "Nazareth" },
        { name: "I’m Not in Love", artist: "10cc" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.mp3",
      name: "Mississippi",
      artist: "Pussicat",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.jpg",
      description: "Pussycat: Mississippi – Pussycat (1975):🔹 O grupo holandês Pussycat alcançou o topo das paradas em vários países com essa música. Curiosamente, a melodia lembra o estilo country americano, mesmo sendo composta na Europa.",
      options: [
        { name: "Take a Chance on Me", artist: "ABBA" },
        { name: "Mississippi", artist: "Pussicat" },
        { name: "Love Hangover", artist: "Diana Ross" },
        { name: "I Love the Nightlife", artist: "Alicia Bridges" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.mp3",
      name: "My Mistake",
      artist: "Pholhas",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.jpg",
      description: "My Mystake: My Mistake – Pholhas (1974):🔹 Embora a banda Pholhas seja brasileira, suas músicas são cantadas em inglês, e 'My Mistake' fez tanto sucesso que muitas pessoas achavam que o grupo era estrangeiro.",
      options: [
        { name: "My Mistake", artist: "Pholhas" },
        { name: "Band on the Run", artist: "Paul McCartney & Wings" },
        { name: "I Want You to Want Me", artist: "Cheap Trick" },
        { name: "Rich Girl", artist: "Gwen Stephani" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.mp3",
      name: "Sailing",
      artist: "Rod Stewart",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.jpg",
      description: "Sailing: Sailing – Rod Stewart (1975):🔹 Embora seja um dos maiores sucessos de Rod Stewart, a música foi originalmente gravada pela banda The Sutherland Brothers em 1972. A versão de Stewart a transformou em um hit mundial.",
      options: [
        { name: "Sailing", artist: "Rod Stewart" },
        { name: "Baker Street", artist: "Gerry Rafferty" },
        { name: "Piano Man", artist: "Billy Joel" },
        { name: "Sweet Emotion", artist: "Aerosmith" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.mp3",
      name: "Tornero",
      artist: "I Santo California",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.jpg",
      description: "Tornero: Tornerò – I Santo California (1975):🔹 Esse clássico romântico italiano se tornou um fenômeno na Europa e América Latina, sendo uma das músicas mais regravadas da época.",
      options: [
        { name: "Don't Stop Me Now", artist: "Queen" },
        { name: "Fame", artist: "David Bowie" },
        { name: "Sir Duke", artist: "Stevie Wonder" },
        { name: "Tornero", artist: "I Santo California" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica1inter/WutheringHeights_KateBush.mp3",
      name: "Wuthering Heights",
      artist: "Kate Bush",
      image: "https://radialistaedsonleite.github.io/qualeamusica1inter/WutheringHeights_KateBush.jpg",
      description: "Wuthering Heights: Wuthering Heights – Kate Bush (1978):🔹 Inspirada no livro homônimo de Emily Brontë, Kate Bush escreveu a música aos 18 anos e se tornou a primeira mulher a alcançar o topo das paradas britânicas com uma composição própria.",
      options: [
        { name: "Loving You", artist: "Minnie Riperton" },
        { name: "It’s Too Late", artist: "Carole King" },
        { name: "Wuthering Heights", artist: "Kate Bush" },
        { name: "You're So Vain", artist: "Carly Simon" }
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
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
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

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function generateFinalComments() {
    return questions
      .map(
        (q) => `
        <div style="margin-bottom: 5px; text-align: center;">
          <p>↴ Um pouco sobre esses sucessos: ↴</p> <!-- Aqui está o texto com os asteriscos -->
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
