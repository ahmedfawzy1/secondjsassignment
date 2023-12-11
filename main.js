/*
var quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
];

var quotesAuthor = document.getElementById("quotesAuthor");
var quotesOutput = document.getElementById("quotesOutput");

var currentQuote = 0;

function changeQuotes() {
  var random = Math.floor(Math.random() * quotes.length);
  // check the number not repeated
  while (random == currentQuote) {
    var random = Math.floor(Math.random() * quotes.length);
  }
  currentQuote = random;
  quotesAuthor.textContent = quotes[random].author;
  quotesOutput.textContent = quotes[random].quote;
}
*/

var quotesAuthor = document.getElementById("quotesAuthor");
var quotesOutput = document.getElementById("quotesOutput");

function changeQuotes() {
  fetch("https://api.quotable.io/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      quotesAuthor.textContent = data.author;
      quotesOutput.textContent = data.content;
    });
}

var quoteLeft = document.getElementById("quoteLeft");
var quoteRight = document.getElementById("quoteRight");
var quoteLine = document.getElementById("quoteLine");

function hideElement() {
  setTimeout(() => {
    quoteLeft.style.display = "block";
    quoteRight.style.display = "block";
    quoteLine.style.display = "block";
  }, 200);
}

function copyBtn() {
  navigator.clipboard.writeText(quotesOutput.innerText);
}
