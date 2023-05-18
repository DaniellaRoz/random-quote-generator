import axios from "axios";

export async function getRandomQuote() {
    try {
        const response = await axios.get("https://api.quotable.io/quotes/random");
        return response.data
    } catch (error) {
        throw error;
    }
}