const counterDisplay = document.querySelector("h3");
let counter = 0;
let intervals = [];
const chooseGameMode = document.querySelector(".chooseGameMode");
let modeActive = false;

if (chooseGameMode) {
  chooseGameMode.addEventListener("click", () => {
    chooseGameMode.classList.add("hidden");
  });
}

// Nettoyage des bulles et intervalles
function stopGame() {
  modeActive = false;
  intervals.forEach((id) => clearInterval(id));
  intervals = [];
  const bulles = document.querySelectorAll("span.bubble, span.specialBubble");
  bulles.forEach((b) => b.remove());
  counter = 0;
  counterDisplay.textContent = counter;
}

// Lancer mode
function startMode(mode) {
  stopGame();
  modeActive = true;
  if (mode === "easy") easyMode();
  else if (mode === "medium") mediumMode();
  else if (mode === "hard") hardMode();
}

function animateBubble(bubble, speedY) {
  let x = parseFloat(bubble.style.left);
  let y = parseFloat(bubble.style.top);

  const angle = (Math.random() * 90 - 60) * (Math.PI / 180);
  let vx = Math.sin(angle) * speedY;
  let vy = -Math.cos(angle) * speedY;

  function step() {
    x += vx;
    y += vy;

    if (
      y + bubble.offsetHeight < 0 ||
      x + bubble.offsetWidth < 0 ||
      x > window.innerWidth
    ) {
      bubble.remove();
      return;
    }

    if (x < 0 || x + bubble.offsetWidth > window.innerWidth) {
      vx = -vx;
      x = Math.max(0, Math.min(window.innerWidth - bubble.offsetWidth, x));
    }

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// easyMode
function easyMode() {
  document.body.style.background = "rgba(148, 236, 161, 0.571)";
  chooseGameMode.classList.add("hidden");

  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "easyBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 100 + 150;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    bubble.style.left = Math.random() * maxLeft + "px";
    bubble.style.top = window.innerHeight + size + "px";

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    animateBubble(bubble, 1.5);
  };

  intervals.push(setInterval(bubbleMaker, 1500));

  // special bubble
  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialEasyBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 180;
    specialBubble.style.width = size + "px";
    specialBubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    specialBubble.style.left = Math.random() * maxLeft + "px";
    specialBubble.style.top = window.innerHeight + size + "px";

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    animateBubble(specialBubble, 2);
  };

  intervals.push(setInterval(specialBubbleMaker, Math.random() * 5000 + 10000));
}

// mediumMode
function mediumMode() {
  document.body.style.background = "rgba(252, 241, 38, 0.57)";
  chooseGameMode.classList.add("hidden");

  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "mediumBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 80 + 100;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    bubble.style.left = Math.random() * maxLeft + "px";
    bubble.style.top = window.innerHeight + size + "px";

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    animateBubble(bubble, 2.5);
  };

  intervals.push(setInterval(bubbleMaker, 2500));

  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialMediumBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 80 + 130;
    specialBubble.style.width = size + "px";
    specialBubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    specialBubble.style.left = Math.random() * maxLeft + "px";
    specialBubble.style.top = window.innerHeight + size + "px";

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    animateBubble(specialBubble, 3);
  };

  intervals.push(setInterval(specialBubbleMaker, Math.random() * 5000 + 12000));
}

// hardMode
function hardMode() {
  document.body.style.background = "rgba(232, 132, 107, 0.57)";
  chooseGameMode.classList.add("hidden");

  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "hardBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 50 + 70;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    bubble.style.left = Math.random() * maxLeft + "px";
    bubble.style.top = window.innerHeight + size + "px";

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    animateBubble(bubble, 3.5);
  };

  intervals.push(setInterval(bubbleMaker, 1000));

  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialHardBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 50 + 100;
    specialBubble.style.width = size + "px";
    specialBubble.style.height = size + "px";

    const maxLeft = window.innerWidth - size;
    specialBubble.style.left = Math.random() * maxLeft + "px";
    specialBubble.style.top = window.innerHeight + size + "px";

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    animateBubble(specialBubble, 4);
  };

  intervals.push(setInterval(specialBubbleMaker, Math.random() * 5000 + 15000));
}

// perdre des points si clic ailleurs
window.addEventListener("click", (e) => {
  if (
    modeActive &&
    !e.target.classList.contains("bubble") &&
    !e.target.classList.contains("button") &&
    !e.target.classList.contains("counter") &&
    !e.target.classList.contains("chooseGameMode")
  ) {
    counter--;
    counterDisplay.textContent = counter;
  }
});
