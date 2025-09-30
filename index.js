const counterDisplay = document.querySelector("h3");
let counter = 0;
let intervals = [];
const chooseGameMode = document.querySelector(".chooseGameMode");
let modeActive = false;

if (chooseGameMode) {
  chooseGameMode.addEventListener("click", () => {
    console.log("banner");
    chooseGameMode.classList.add("hidden");
  });
}

// Nettoyage des bulles et intervalles
function stopGame() {
  modeActive = false;
  intervals.forEach((id) => clearInterval(id));
  intervals = [];
  const bulles = document.querySelectorAll("span.bubble, span.specialBubble");
  bulles.forEach(function (b) {
    b.remove();
  });
  counter = 0;
  counterDisplay.textContent = counter;
}

// Lancer un mode
function startMode(mode) {
  stopGame();
  modeActive = true;
  if (mode === "easy") easyMode();
  else if (mode === "medium") mediumMode();
  else if (mode === "hard") hardMode();
}

const easyMode = () => {
  console.log(startMode);

  document.body.style.background = "rgba(148, 236, 161, 0.571)";
  chooseGameMode.classList.add("hidden");

  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "easyBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 100 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    setTimeout(() => {
      bubble.remove();
    }, 10000);
  };

  setInterval(bubbleMaker, Math.random() * 2000);

  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialEasyBubble");
    document.body.appendChild(specialBubble);
    console.log(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;
    console.log(specialBubble);

    specialBubble.style.top = Math.random() * 100 + 100 + "%";
    specialBubble.style.left = Math.random() * 100 + "%";
    console.log(specialBubble);

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    specialBubble.style.setProperty(
      "--left",
      Math.random() * 100 * plusMinus + "%"
    );
    console.log(specialBubble);

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    setTimeout(() => {
      specialBubble.remove();
    }, 7000);
  };

  setInterval(specialBubbleMaker, Math.random() * 30000);
};

// MEdium
const mediumMode = () => {
  document.body.style.background = "rgba(252, 241, 38, 0.57)";
  chooseGameMode.classList.add("hidden");

  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "mediumBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 100 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    setTimeout(() => {
      bubble.remove();
    }, 10000);
  };

  setInterval(bubbleMaker, Math.random() * 5000);

  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialMediumBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;

    specialBubble.style.top = Math.random() * 100 + 100 + "%";
    specialBubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    specialBubble.style.setProperty(
      "--left",
      Math.random() * 100 * plusMinus + "%"
    );

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    setTimeout(() => {
      specialBubble.remove();
    }, 4000);
  };

  setInterval(specialBubbleMaker, Math.random() * 50000);
};

// Hard

const hardMode = () => {
  document.body.style.background = "rgba(232, 132, 107, 0.57)";
  chooseGameMode.classList.add("hidden");
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble", "hardBubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 100 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    setTimeout(() => {
      bubble.remove();
    }, 10000);
  };

  setInterval(bubbleMaker, Math.random() * 8000);

  const specialBubbleMaker = () => {
    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble", "specialHardBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;

    specialBubble.style.top = Math.random() * 100 + 100 + "%";
    specialBubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    specialBubble.style.setProperty(
      "--left",
      Math.random() * 100 * plusMinus + "%"
    );

    specialBubble.addEventListener("click", () => {
      counter += 6;
      counterDisplay.textContent = counter;
      specialBubble.remove();
    });

    setTimeout(() => {
      specialBubble.remove();
    }, 7000);
  };

  setInterval(specialBubbleMaker, Math.random() * 60000);
};
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
