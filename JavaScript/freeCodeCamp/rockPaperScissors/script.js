function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*2)];
  }
  console.log(getRandomComputerResult());

