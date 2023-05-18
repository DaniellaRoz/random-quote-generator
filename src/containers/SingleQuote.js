import "./SingleQuote.css";

import { useState, useEffect } from "react";

import { getRandomQuote } from "../utils/quoteUtils";
import RandomQuote from "../components/RandomQuote";
import Quote from "../components/Quote";
import Author from "../components/Author";
import Footer from "../components/Footer";

function SingleQuote() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            try {
                const quoteData = await getRandomQuote();
                setQuote(quoteData);
            } catch (err) {
                console.log(err);
                setQuote(null);
            }
        }

        fetchQuote();
    }, []);

    return (
        <div>
            <header>
                <RandomQuote />
            </header>
            <main>
                {quote ? (
                    <>
                        <Quote quote={quote[0].content} />
                        <Author author={quote[0].author} category={quote[0].tags[0]} />
                    </>
                ) : (
                    <Quote quote="Loading..."/>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default SingleQuote;
