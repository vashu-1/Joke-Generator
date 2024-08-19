const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://official-joke-api.appspot.com/random_joke";

let getjoke = () => {
  // jokecontainer.classList.remove('')
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokecontainer.textContent = item.setup + "~" + item.punchline;
      // jokecontainer.classList.add('fade')
    });
};
btn.addEventListener("click", getjoke);
getjoke();
