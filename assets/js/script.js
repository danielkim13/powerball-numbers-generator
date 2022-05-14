const button = document.querySelector("#btn");
const mainContainer = document.querySelector(".gen-container");

const generateNum = () => {
  const container = document.createElement("div");
  container.className = "grid-container";
  mainContainer.appendChild(container);

  randomNumArray = [];

  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 69 + 1);
    randomNumArray.push(randomNum);
  }

  randomNumArray.sort();
  if (randomNumArray.length > 0) {
    const powerNum = Math.floor(Math.random() * 26 + 1);
    randomNumArray.push(powerNum);
  }
  console.log(randomNumArray);

  for (let i = 0; i < randomNumArray.length; i++) {
    const generatedNum = document.createElement("p");
    container.appendChild(generatedNum);
    generatedNum.innerText = randomNumArray[i];
  }
};

button.addEventListener("click", generateNum);

// 1-26 for powerball
// 1-69 for first five #

// TODO duplicate case
// TODO removeChild elements when btn clicked
