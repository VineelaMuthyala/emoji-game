import './index.css'

const WinOrLoseCard = props => {
  const {cardDetails, finalScore, restartTheGame} = props
  const {title, text, imageUrl} = cardDetails

  const playAgain = () => {
    restartTheGame()
  }
  return (
    <div className="win-lose-card">
      <div className="win-lose-card-text">
        <h1 className="title-text">{title}</h1>
        <p className="para">{text}</p>
        <p>{finalScore}/12</p>
        <button className="button-card" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img className="final-card-image" alt="win or lose" src={imageUrl} />
    </div>
  )
}
export default WinOrLoseCard
