// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameRunning} = props
  return (
    <nav className="NavBar">
      <div className="NameAndLogo">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="GameName">Emoji Game</h1>
      </div>
      {isGameRunning ? (
        <div className="ScoreBar">
          <p className="scoreText">Score: {score}</p>
          <p className="scoreText">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
