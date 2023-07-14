import './index.css'

const EmojiCard = props => {
  const {emoji, emojiClicked} = props
  const {emojiName, emojiUrl, id} = emoji

  const onClickOfEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li>
      <button
        type="button"
        className="emoji-card-container"
        onClick={onClickOfEmoji}
      >
        <img className="emoji-icon" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard
