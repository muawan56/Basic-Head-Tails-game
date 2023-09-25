const rand = () => {
  const randNum = Math.random();
  return randNum;
};

let result = "",
  wins = JSON.parse(localStorage.getItem("scoreWins")) || 0,
  loses = JSON.parse(localStorage.getItem("scoreLoses")) || 0;

function playGame(playerMove) {
  let updateScore = () => {
    if (result === "You win!") {
      wins++;
    } else {
      loses++;
    }
    const scoreWins = JSON.stringify(wins);
    const scoreLoses = JSON.stringify(loses);
    localStorage.setItem("scoreWins", scoreWins);
    localStorage.setItem("scoreLoses", scoreLoses);
  };

  const randomNumber = rand();
  if (randomNumber < 0.5) computerMove = "heads";
  else computerMove = "tails";
  console.log(randomNumber);
  if (playerMove === computerMove) {
    result = "You win!";
    console.log(result);
  } else {
    result = "You lose!";
    console.log(result);
  }
  updateScore();

  document.querySelector(".js-result").innerHTML = `
<p>
${result}
</p>
<p>
 You ${playerMove.toUpperCase()}-${computerMove.toUpperCase()} by computer
</p>
<p>
Wins: ${wins} - Loses: ${loses}
</p>
`;
}

function resetScore() {
  wins = localStorage.removeItem("scoreWins") || 0;
  loses = localStorage.removeItem("scoreLoses") || 0;
  document.querySelector(".js-result").innerHTML = `
<p>
Score has been reset.
</p>
<p>
Wins: ${wins} - Loses: ${loses}
</p>
`;
}
