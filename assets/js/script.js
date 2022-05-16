const button = document.querySelector("#btn");
const mainContainer = document.querySelector(".value-container");

// generate first five random numbers **rule # between 1 thru 69.
const initialNum = () => {
  randomNumArray = [];

  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 69 + 1);
    randomNumArray.push(randomNum);
  }

  findDuplicate(randomNumArray);
};

// parse the array and find if there is a dup.
const findDuplicate = (initialArray) => {
  const set = new Set(initialArray);
  if (initialArray.length === set.size) {
    finalStep(initialArray);
  } else {
    initialNum();
  }
};

// final step will sort through the non-dup array and add final powerball # **rule # between 1 thru 26
const finalStep = async (array) => {
  const container = document.createElement("div");
  container.className = "grid-container";
  mainContainer.appendChild(container);
  const sortedArray = await array.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  const powerNum = Math.floor(Math.random() * 26 + 1);
  sortedArray.push(powerNum);

  for (let i = 0; i < sortedArray.length; i++) {
    const NumEl = document.createElement("p");
    container.appendChild(NumEl);
    NumEl.innerText = array[i];
  }
};

// looking for pre-existing elements and remove. This function ensures a set of number display at a time
const initiate = () => {
  if (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.firstChild);
    initialNum();
  } else {
    initialNum();
  }
};

button.addEventListener("click", initiate);
