"use strict";
//Array affirmation version

// const affirmations = [
//   "Every line of code I write is a brick in a foundation that will eventually support my family.",
//   "The 'Fog' is a physiological state, not a permanent reality; my clarity will return as my chemistry stabilizes.",
//   "My brain sees the whole cathedral, but I only need to lay one perfect brick today.",
//   "A 'Micro-Win' today is worth more than a 'Perfect Project' that never gets started.",
// ];
// function randomAffirmation() {
//   const randomIndex = Math.floor(Math.random() * affirmations.length);
//   return affirmations[randomIndex];
// }
// console.log(randomAffirmation());

// // console.log(affirmations[0]);
// // console.log(affirmations[1]);
// // console.log(affirmations[2]);
// // console.log(affirmations[3]);
const messageDisplay = document.getElementById("display");
const submitBtn = document.getElementById("trigger");
// submitBtn.addEventListener("click", function () {
//   messageDisplay.innerText = randomAffirmation();
// });

//Affirmation Api version

const apiURL = "https://api.adviceslip.com/advice";
async function getLiveAffirmation() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    // Look at the "Menu" structure: we need to enter 'slip' then 'advice'
    console.log(data); // Uncomment this to see the "Double Wrapper"
    return data.slip.advice;
  } catch (error) {
    console.log("Error caught:", error);
    return "The internet is quiet today, but your progress is still loud.";
  }
}

submitBtn.addEventListener("click", async function () {
  // 1. Tell the brain to go get the data
  const message = await getLiveAffirmation();

  // 2. Physically push that data into the h1
  messageDisplay.innerText = message;
});
// // Test the function immediately in the console
// getLiveAffirmation().then((result) => console.log("API says:", result));
