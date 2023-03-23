// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {topScore, score, onPlayAgain} = props

  const playAgain = () => {
    onPlayAgain()
  }

  const won = score === 12
  const bestScore = score > topScore

  return (
    <div className="WinOrLoseCard">
      <img
        className="WinOrLoseImage"
        alt="win or lose"
        src={
          won
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
      />
      <div className="ResultText">
        <h1>{won ? 'You Won' : 'You Lose'}</h1>
        {bestScore ? (
          <p className="ScoreText">Best Score</p>
        ) : (
          <p className="ScoreText">Score</p>
        )}
        <p className="Score">{`${score}/12`}</p>

        <button onClick={playAgain} type="button" className="PlayAgainButton">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
