const quoteApi = "https://api.quotable.io/random";

const savedQuote = JSON.parse(localStorage.getItem("quote"));
const quoteToday = new Date();

function onLoad() {
    if(savedQuote === null || savedQuote.date !== quoteToday.getDate()) {
        fetch(quoteApi).then((response) => response.json())
            .then((data) => {
                const todaysQuote = {
                    quote: data.content,
                    author: data.author,
                    date: quoteToday.getDate()
                }
                localStorage.setItem("quote", JSON.stringify(todaysQuote));
                paintQuote(todaysQuote);
            });
    } else {
        paintQuote(savedQuote);
    }
}

function paintQuote(param) {
    const quote = document.querySelector("#quote div:first-child");
    const author = document.querySelector("#quote div:last-child");

    quote.innerText = param.quote;
    author.innerText = param.author;
}

window.addEventListener("load", onLoad);