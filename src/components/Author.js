import "./Author.css";

function Author({ author, category }) {
    return (
        <a className="author-container" href="#">
            <p className="author">{author}</p>
            <p className="category">{category}</p>
        </a>
    );
}

export default Author;
