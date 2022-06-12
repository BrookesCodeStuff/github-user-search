const form = document.querySelector("form");
const srchUser = document.querySelector("#user-search");
const btn = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  const user = srchUser.value;

  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      if (!response.ok) {
        const errSpan = document.createElement("span");
        errSpan.classList.add("text-red-600");
        errSpan.textContent = "No search results";
        srchUser.insertAdjacentElement("afterend", errSpan);
      }
      return response.json();
    })
    .then((data) => console.log(data));
}

form.addEventListener("submit", handleSubmit);
