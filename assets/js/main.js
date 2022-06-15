import { formatDate } from "./helpers.js";
const form = document.querySelector("form");
const srchUser = document.querySelector("#user-search");
const err = document.querySelector("#error");

function handleSubmit(event) {
  event.preventDefault();
  const user = srchUser.value;

  if (!err.classList.contains("hidden")) {
    err.classList.add("hidden");
  }

  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No results");
    })
    .then((data) => {
      createUserCard(data);
    })
    .catch((error) => err.classList.remove("hidden"));
}

function createUserCard(data) {
  // Grab all card elements and update
  const avatar = document.querySelector("#avatar");
  avatar.src = data.avatar_url;

  const name = document.querySelector("#name");
  name.textContent = data.name;

  const username = document.querySelector("#username");
  username.textContent = `@${data.login}`;

  const joined = document.querySelector("#joined");
  joined.textContent = `Joined ${formatDate(data.created_at)}`;

  const bio = document.querySelector("#bio");
  bio.textContent = data.bio ? data.bio : "Not available";

  const repos = document.querySelector("#repos");
  repos.textContent = data.public_repos;

  const followers = document.querySelector("#followers");
  followers.textContent = data.followers;

  const following = document.querySelector("#following");
  following.textContent = data.following;

  const location = document.querySelector("#location");
  location.textContent = data.location ? data.location : "Not available";

  const twitter = document.querySelector("#twitter");
  data.twitter_username
    ? (twitter.innerHTML = `<a href=https://twitter.com/${data.twitter_username}>${data.twitter_username}</a>`)
    : (twitter.textContent = "Not available");

  const link = document.querySelector("#link");
  data.blog
    ? (link.innerHTML = `<a href=${data.blog}>${data.blog}</a>`)
    : (link.textContent = "Not available");

  const company = document.querySelector("#company");
  company.textContent = data.company ? data.company : "Not Available";
}

form.addEventListener("submit", handleSubmit);
