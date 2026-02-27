const affirmations = [
  "Every line of code I write is a brick in a foundation that will eventually support my family.",
  "The 'Fog' is a physiological state, not a permanent reality; my clarity will return as my chemistry stabilizes.",
  "My brain sees the whole cathedral, but I only need to lay one perfect brick today.",
  "A 'Micro-Win' today is worth more than a 'Perfect Project' that never gets started.",
];
function randomAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  return affirmations[randomIndex];
}
console.log(randomAffirmation());

// console.log(affirmations[0]);
// console.log(affirmations[1]);
// console.log(affirmations[2]);
// console.log(affirmations[3]);
const messageDisplay = document.getElementById("display");
const submitBtn = document.getElementById("trigger");
submitBtn.addEventListener("click", function () {
  messageDisplay.innerText = randomAffirmation();
});
