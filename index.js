//

// const counterDisplay = document.querySelector("h3");
// const body = document.querySelector(".allMight");
// let counter = 0;

// function updateScore() {
//   counterDisplay.textContent = counter;
//   console.log(counter);
// }

// const bubbleMaker = () => {
//   const bubble = document.createElement("span");
//   bubble.classList.add("bubble");
//   document.body.appendChild(bubble);

//   const size = Math.random() * 200 + 100 + "px";
//   bubble.style.height = size;
//   bubble.style.width = size;

//   bubble.style.top = Math.random() * 100 + 50 + "%";
//   bubble.style.left = Math.random() * 100 + "%";

//   const plusMinus = Math.random() > 0.5 ? 1 : -1;

//   bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

//   bubble.addEventListener("click", (event) => {
//     console.log(e);
//     counter++;
//     updateScore();
//     bubble.remove();
//   });

//   document.body.addEventListener("click", (e) => {
//     console.log(e);
//     counter--;
//     updateScore();
//     bubble.remove();
//   });

//   setTimeout(() => {
//     bubble.remove();
//   }, 8000);

//   updateScore();
// };

// setInterval(bubbleMaker, 300);

// updateScore();

//   bubble.addEventListener("click", () => {
//   counter++;
//   counterDisplay.textContent = counter;
//   bubble.remove();
//   console.log("counter =" + counter);
//   console.log("minus =" + minus);
// });
