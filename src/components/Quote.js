import "./Quote.css";

function Quote({ quote }) {
    return (
        <div className="quote-container">
            { quote !== "Loading..." ? (
                <p className="quote">"{quote}"</p>
            ) : (
                <p className="quote">{quote}</p>
            )}
        </div>
    );
}

export default Quote;
