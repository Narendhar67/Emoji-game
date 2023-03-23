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
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    score: 0,
    isGameRunning: true,
    clickedEmojis: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    const {topScore, score} = this.state
    const finalTopScore = topScore < score ? score : topScore

    this.setState({score: 0, isGameRunning: true, topScore: finalTopScore})
  }

  onClickEmoji = id => {
    const {clickedEmojis, score} = this.state

    const setFinalScore = () => {
      this.setState({
        isGameRunning: false,
        clickedEmojis: [],
      })
    }

    if (!clickedEmojis.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
      if (score === 11) {
        setFinalScore()
      }
    } else {
      setFinalScore()
    }
  }

  render() {
    const {topScore, score, isGameRunning} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar
          isGameRunning={isGameRunning}
          topScore={topScore}
          score={score}
        />
        <div className="GameSpace">
          {isGameRunning ? (
            <ul className="emojiPattern">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  ClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              onPlayAgain={this.onPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
