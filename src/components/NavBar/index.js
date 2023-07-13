import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-bar">
      <div className="emoji-logo-container">
        <img
          className="emoji-game-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score-text">Score:{score}</p>
        <p className="score-text">Top Score:{topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
