// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, ClickEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const clickMe = () => {
    ClickEmoji(id)
  }

  return (
    <li className="emojiCard">
      <button className="button" onClick={clickMe} type="button">
        <img alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
