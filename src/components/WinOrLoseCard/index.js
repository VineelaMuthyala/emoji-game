import './index.css'

const WinOrLoseCard = (props) =>(
    const {cardDetails} = this.props
    const {title, text, imageUrl} = cardDetails
    return(
        <div className="win-lose-card">
            <div className="win-lose-card-text">
                <h1 className="title-text">{title}</h1>
                <p className="para">{text}</p>
                <button className="button" type="button">Play Again</button>
            </div>
            <img className="final-card-image" alt="title" src={imageUrl}/>
        </div>
    )
)
export default WinOrLoseCard