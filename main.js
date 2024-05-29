// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let fishInventory = document.getElementById("fish-inventory"); // display (div)

let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let numFishing = document.getElementById("num-fishing");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

plus5Btn.addEventListener("click", plus5);

until200Btn.addEventListener("click", unit200);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Stive Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      addToFishInventory("img/Raw-Cod.png");
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      addToFishInventory("img/Raw-Salmon.png");
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      addToFishInventory("img/Tropical-Fish.png");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      addToFishInventory("img/Pufferfish.png");
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      addToFishInventory("img/Raw-Cod.png");
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      addToFishInventory("img/Raw-Salmon.png");
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      addToFishInventory("img/Tropical-Fish.png");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      addToFishInventory("img/Pufferfish.png");
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      addToFishInventory("img/Raw-Cod.png");
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      addToFishInventory("img/Raw-Salmon.png");
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      addToFishInventory("img/Tropical-Fish.png");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      addToFishInventory("img/Pufferfish.png");
    }
  }
}

function addToFishInventory(fishImgSrc) {
  // Create an image element
  let fishImg = document.createElement("img");
  fishImg.src = fishImgSrc;
  fishImg.width = "25"; // Set width to 25px
  fishInventory.appendChild(fishImg); // Append the image to the fish inventory (div)
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function unit200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

numFishing.addEventListener("change", numFishingChanged);
function numFishingChanged() {
  let a = numFishing.value;

  for (let j = 1; j <= a; j++) {
    fishBtnClicked();
  }
}

// Add event listener for the 'Sort Fish' button
document.getElementById("sort-fish-btn").addEventListener("click", sortFish);

function sortFish() {
  // Clear out the fish inventory section
  fishInventory.innerHTML = "";

  // Add fish images based on their count
  for (let i = 0; i < numCod; i++) {
    addToFishInventory("img/Raw-Cod.png");
  }

  for (let i = 0; i < numSalmon; i++) {
    addToFishInventory("img/Raw-Salmon.png");
  }

  for (let i = 0; i < numTropical; i++) {
    addToFishInventory("img/Tropical-Fish.png");
  }

  for (let i = 0; i < numPuffer; i++) {
    addToFishInventory("img/Pufferfish.png");
  }
}
