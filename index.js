const counterDisplay = document.querySelector("h3");
let counter = 0;

const easyButton = document.querySelector(".level1");
const MediumButton = document.querySelector(".level2");
const HardButton = document.querySelector(".level3");
// Easy

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("bubble")) {
    counter--;
    counterDisplay.textContent = counter;
  }
});

const easyMode = () => {
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
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
    }, 8000);
  };

  setInterval(bubbleMaker, 1000);

  const specialBubbleMaker = () => {
    console.log("arrive");

    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;

    specialBubble.style.top = Math.random() * 100 + 50 + "%";
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
    console.log("parti");
  };

  setInterval(specialBubbleMaker, Math.random() * 30000);
};
// MEdium
const mediumMode = () => {
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
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
    }, 8000);
  };

  setInterval(bubbleMaker, 1000);

  const specialBubbleMaker = () => {
    console.log("arrive");

    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;

    specialBubble.style.top = Math.random() * 100 + 50 + "%";
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
    console.log("parti");
  };

  setInterval(specialBubbleMaker, Math.random() * 30000);
};

// Hard

const HardMode = () => {
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
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
    }, 8000);
  };

  setInterval(bubbleMaker, 1000);

  const specialBubbleMaker = () => {
    console.log("arrive");

    const specialBubble = document.createElement("span");
    specialBubble.classList.add("specialBubble");
    document.body.appendChild(specialBubble);

    const size = Math.random() * 100 + 100 + "px";
    specialBubble.style.height = size;
    specialBubble.style.width = size;

    specialBubble.style.top = Math.random() * 100 + 50 + "%";
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
    console.log("parti");
  };

  setInterval(specialBubbleMaker, Math.random() * 30000);
};
// General

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("bubble")) {
    counter--;
    counterDisplay.textContent = counter;
  }
});
