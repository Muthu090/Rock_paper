import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerturn, setPlayerTurn] = useState(1);
  const [result, setResult] = useState(null);

  const task = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return 0;
    else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    )
      return 1;
    else return -1;
  };

  const games = (playerChoice) => {
    if (playerturn > 5) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const value = task(playerChoice, computerChoice);

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (value === 1) {
      setPlayerScore(playerScore + 1);
    } else if (value === -1) {
      setComputerScore(computerScore + 1);
    }

    setPlayerTurn(playerturn + 1);

    if (playerturn === 5) {
      if (playerScore + (value === 1 ? 1 : 0) > computerScore + (value === -1 ? 1 : 0)) {
        setResult('You Win!');
      } else if (playerScore + (value === 1 ? 1 : 0) < computerScore + (value === -1 ? 1 : 0)) {
        setResult('Computer Wins!');
      } else {
        setResult('It\'s a Draw!');
      }
    }
  };

  return (
    <div className="gammmmme">
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className="container">
          <div className="player">
            <div>
              Player 1: {playerScore} <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="player">
            <div>
              Player 2: {computerScore} <FontAwesomeIcon icon={faRobot} />
            </div>
          </div>
        </div>
      </div>
      {playerturn <= 5 ? (
        <div>
          <button className="btn" onClick={() => games("rock")}>
            <FontAwesomeIcon icon={faHandBackFist} size="2x" /> ROCK
          </button>
          <button className="btn" onClick={() => games("paper")}>
            <FontAwesomeIcon icon={faHand} size="2x" /> PAPER
          </button>
          <button className="btn" onClick={() => games("scissors")}>
            <FontAwesomeIcon icon={faHandScissors} size="2x" /> SCISSORS
          </button>
        </div>
      ) : (
        <h2>{result}</h2>
      )}
      <div>
        <p>Your choice: {playerChoice}</p>
        <p>Computer choice: {computerChoice}</p>
        <p>Your score: {playerScore}</p>
        <p>Computer score: {computerScore}</p>
        <p>turn: {playerturn> 5 ? 5 : playerturn}/5</p>
      </div>
    </div>
  );
}

export default App;