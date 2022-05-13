const quotes = [
    {
        quote: "1",
        author: "1...",
    },
    {
        quote: "2",
        author: "2...",
    },
    {
        quote: "3",
        author: "3...",
    },
    {
        quote: "4",
        author: "4...",
    },
    {
        quote: "5",
        author: "5...",
    },
    {
        quote: "6",
        author: "6...",
    },
    {
        quote: "7",
        author: "7...",
    },
    {
        quote: "8",
        author: "8...",
    },
    {
        quote: "9",
        author: "9...",
    },
    {
        quote: "10",
        author: "10...",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
 
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;