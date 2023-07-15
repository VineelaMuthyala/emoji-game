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

class EmojiGame extends Component {
  state = {clickedEmojisList: [], score: 0, topScore: 0, isClicked: false}

  getShuffledList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartTheGame = () => {
    const {topScore, score} = this.state
    const updateTopScore = topScore > score ? topScore : score
    return this.setState({
      score: 0,
      clickedEmojisList: [],
      topScore: updateTopScore,
      isClicked: false,
    })
  }

  emojiClicked = id => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isPresent = clickedEmojisList.includes(id)
    if (isPresent === false && clickedEmojisList.length < emojisList.length) {
      return this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
    return this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  getEmojiCards = () => {
    const {clickedEmojisList, score, isClicked} = this.state
    const {emojisList} = this.props
    const shuffledList = this.getShuffledList()

    if (isClicked === false && clickedEmojisList.length < emojisList.length) {
      return (
        <div>
          <ul className="unordered-list-container">
            {shuffledList.map(eachEmoji => (
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

    if (clickedEmojisList.length === emojisList.length) {
      return (
        <WinOrLoseCard
          cardDetails={cards[0]}
          finalScore={score}
          restartTheGame={this.restartTheGame}
        />
      )
    }
    return (
      <WinOrLoseCard
        cardDetails={cards[1]}
        finalScore={score}
        restartTheGame={this.restartTheGame}
      />
    )
  }

  render() {
    const {score, topScore, isClicked} = this.state

    return (
      <div className="emojiGame-container">
        <NavBar score={score} topScore={topScore} hideNavBar={isClicked} />
        {this.getEmojiCards()}
      </div>
    )
  }
}
export default EmojiGame
