const counterDisplay = document.querySelector("h3");
const instructions = document.querySelector(".instructions");
const chooseGameMode = document.querySelector(".chooseGameMode");
let counter = 0;
let modeActive = false;
let intervals = [];

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const resetGame = () => {
  modeActive = false;
  intervals.forEach(clearInterval);
  intervals = [];
  document
    .querySelectorAll(".bubble, .specialBubble")
    .forEach((b) => b.remove());
  counter = 0;
  counterDisplay.textContent = 0;
};

function startMode(mode) {
  resetGame();
  modeActive = true;

  // Activation d boutons
  document
    .querySelectorAll(".button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`#B${mode === "easy" ? 1 : mode === "medium" ? 2 : 3}`)
    ?.classList.add("active");

  instructions?.remove();
  chooseGameMode?.remove();

  const settings = {
    easy: {
      bubbleInterval: 1500,
      speed: 1.5,
      specialMin: 10000,
      specialMax: 15000,
      sizeMin: 150,
      sizeRange: 100,
    },
    medium: {
      bubbleInterval: 2500,
      speed: 2.5,
      specialMin: 12000,
      specialMax: 17000,
      sizeMin: 100,
      sizeRange: 80,
    },
    hard: {
      bubbleInterval: 3000,
      speed: 3.5,
      specialMin: 15000,
      specialMax: 20000,
      sizeMin: 70,
      sizeRange: 50,
    },
  }[mode];

  spawnBubbles(settings, mode);
}

function animateBubble(bubble, vx, vy) {
  const step = () => {
    let x = parseFloat(bubble.style.left);
    let y = parseFloat(bubble.style.top);

    x += vx;
    y += vy;

    // rebond + suppression qd hors écran
    if (x < 0 || x + bubble.offsetWidth > window.innerWidth) vx = -vx;
    if (
      y + bubble.offsetHeight < 0 ||
      x + bubble.offsetWidth < 0 ||
      x > window.innerWidth
    )
      return bubble.remove();

    bubble.style.left =
      Math.max(0, Math.min(window.innerWidth - bubble.offsetWidth, x)) + "px";
    bubble.style.top = y + "px";

    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Génération de bulles */
function createBubble(isSpecial, speed, sizeMin, sizeRange, mode) {
  const bubble = document.createElement("span");
  const size = Math.random() * sizeRange + sizeMin;
  const left = Math.random() * (window.innerWidth - size);

  bubble.className = isSpecial
    ? `specialBubble special${capitalize(mode)}Bubble`
    : `bubble ${mode}Bubble`;

  bubble.style.width = bubble.style.height = `${size}px`;
  bubble.style.left = `${left}px`;
  bubble.style.top = `${window.innerHeight + size}px`;

  if (!isSpecial)
    bubble.style.background = `radial-gradient(circle at center, ${randomColor()})`;

  document.body.appendChild(bubble);

  const angle = (Math.random() * 90 - 60) * (Math.PI / 180);
  const vx = Math.sin(angle) * speed;
  const vy = -Math.cos(angle) * speed;

  bubble.addEventListener("click", () => handleBubbleClick(bubble, isSpecial));

  animateBubble(bubble, vx, vy);
}

function handleBubbleClick(bubble, isSpecial) {
  bubble.remove();
  counter += isSpecial ? 5 : 1;
  counterDisplay.textContent = counter;

  const animClass = isSpecial ? "specialPulse" : "pulse";
  counterDisplay.classList.add(animClass);
  setTimeout(
    () => counterDisplay.classList.remove(animClass),
    isSpecial ? 150 : 100
  );
}

/*  spawn bulles et bulles spéciales */
function spawnBubbles(
  { bubbleInterval, speed, specialMin, specialMax, sizeMin, sizeRange },
  mode
) {
  intervals.push(
    setInterval(() => {
      createBubble(false, speed, sizeMin, sizeRange, mode);
    }, bubbleInterval)
  );

  const specialDelays = {
    easy: { min: 5000, max: 20000 },

    medium: { min: 8000, max: 25000 },

    hard: { min: 10000, max: 30000 },
  };

  const { min, max } = specialDelays[mode];

  const initialSpecialDelay = Math.random() * (max - min) + min;

  setTimeout(() => {
    if (!modeActive) return;

    const spawnSpecial = () => {
      if (!modeActive) return;
      createBubble(true, speed + 0.5, sizeMin - 15, sizeRange - 15, mode);
      intervals.push(
        setTimeout(
          spawnSpecial,
          Math.random() * (specialMax - specialMin) + specialMin
        )
      );
    };

    spawnSpecial();
  }, initialSpecialDelay);
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/* malus si clic ailleurs + croix rouge */
window.addEventListener("click", (e) => {
  if (!modeActive) return;

  const ignored = [
    "bubble",
    "specialBubble",
    "button",
    "button-outer",
    "button-inner",
    "display",
    "counter",
  ];

  const isAllowed = ignored.some((cls) => e.target.classList.contains(cls));

  if (!isAllowed) {
    // Décrémenter le score
    counter--;
    counterDisplay.textContent = counter;

    // Afficher une petite croix rouge à la position du clic
    const cross = document.createElement("div");
    cross.classList.add("error-cross");
    cross.style.left = `${e.clientX}px`;
    cross.style.top = `${e.clientY}px`;

    document.body.appendChild(cross);

    // Supprimer la croix après 1s
    setTimeout(() => cross.remove(), 1000);
  }
});
