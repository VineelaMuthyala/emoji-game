/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const cards = [
  {
    id: 1,
    title: 'You Won',
    text: 'Best Score',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
  },
  {
    id: 2,
    title: 'You Lose',
    text: 'Score',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
  },
]

let isClicked = false

class EmojiGame extends Component {
  state = {clickedEmojisList: [], score: 0, topScore: 0, finalScore: 0}

  restartTheGame = () => {
    this.setState({clickedEmojisList: [], score: 0})
    isClicked = false
  }

  emojiClicked = id => {
    const {clickedEmojisList, topScore, score} = this.state
    const {emojisList} = this.props
    isClicked = clickedEmojisList.includes(id)

    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledEmojisList})

    if (isClicked === false) {
      return this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
    const updateTopScore = topScore > score ? topScore : score
    this.setState({finalScore: score})
    return this.setState({
      score: 0,
      clickedEmojisList: [],
      topScore: updateTopScore,
    })
  }

  getEmojiCards = () => {
    const {emojisList} = this.props
    const {topScore, finalScore} = this.state

    if (isClicked === false) {
      return (
        <div>
          <ul className="unordered-list-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emoji={eachEmoji}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        </div>
      )
    }
    if (emojisList.length === topScore) {
      return (
        <WinOrLoseCard
          cardDetails={cards[0]}
          score={finalScore}
          restartTheGame={this.restartTheGame}
        />
      )
    }
    return (
      <WinOrLoseCard
        cardDetails={cards[1]}
        score={finalScore}
        restartTheGame={this.restartTheGame}
      />
    )
  }

  render() {
    const {score, topScore} = this.state
    return (
      <div className="emojiGame-container">
        <NavBar score={score} topScore={topScore} isClicked={isClicked} />
        {this.getEmojiCards()}
      </div>
    )
  }
}
export default EmojiGame
