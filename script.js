"use strict";

const messageDisplay = document.getElementById("display");
const submitBtn = document.getElementById("trigger");
const localURL = "./data/affirmations.json";

// 1. The "Brain" (ONLY fetches data)
async function getAffirmation() {
  try {
    const response = await fetch(localURL);
    const data = await response.json();

    // Pick a random one from your 100+ list
    const randomIndex = Math.floor(Math.random() * data.affirmations.length);
    return data.affirmations[randomIndex];
  } catch (error) {
    console.error("Path error! Is the file in the /data folder?", error);
    return "Error loading local data.";
  }
}

// 2. The "Nervous System" (STAYS OUTSIDE the function)
submitBtn.addEventListener("click", async function () {
  const message = await getAffirmation();
  messageDisplay.innerText = message;
});
