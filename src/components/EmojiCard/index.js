import './index.css'

const EmojiCard = props => {
  const {emoji, emojiClicked} = props
  const {emojiName, emojiUrl, id} = emoji

  const onClickOfEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickOfEmoji}>
        <div className="emoji-card-container">
          <img className="emoji-icon" alt={emojiName} src={emojiUrl} />
        </div>
      </button>
    </li>
  )
}
export default EmojiCard
