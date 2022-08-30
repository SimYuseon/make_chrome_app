const quotes = [
  {
    quote: "Don’t be afraid to give up the good to go for the great. ",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: " Robert H. Schuller",
  },
  {
    quote:
      "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. ",
    author: "Angelina Jolie",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "It's amazing how a little tomorrow can make up for a whole lot of yesterday.",
    author: "John Guare",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * (quotes.length - 1))];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
