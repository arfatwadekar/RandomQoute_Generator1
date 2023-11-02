const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
    console.log(item.content);
    console.log(item.author);
    quote.innerHTML = item.content;
    author.innerHTML = ` Author :-   ${item.author}`;
    });
};

window.addEventListener("load", getQuote)
btn.addEventListener('click', getQuote)