const form = document.querySelector("form");
const srchUser = document.querySelector("#user-search");

function handleSubmit(event) {
  event.preventDefault();
  const user = srchUser.value;

  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      if (!response.ok) {
        const errSpan = document.createElement("span");
        errSpan.classList.add("text-red-600");
        errSpan.textContent = "No results";
        srchUser.insertAdjacentElement("afterend", errSpan);
      }
      return response.json();
    })
    .then((data) => {
      createUserCard(data);
    });
}

function createUserCard(data) {
  // Grab all existing card elements
  const userCard = document.querySelector("#user-card");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const location = document.querySelector("#location");
  const twitter = document.querySelector("#twitter");
  const link = document.querySelector("#link");
  const company = document.querySelector("#company");

  const avatar = document.createElement("img");
  avatar.src = data.avatar_url;

  const name = document.createElement("div");
  name.textContent = data.name;

  const username = document.createElement("div");
  username.textContent = data.login;

  const bio = document.createElement("p");
  bio.textContent = data.bio;

  // Add all new elements to user card container
  userCard.prepend(avatar, name, username, bio);

  // Fill in the rest of the card info
  const repoCount = document.createElement("div");
  repoCount.textContent = data.public_repos;
  repos.appendChild(repoCount);

  const followerCount = document.createElement("div");
  followerCount.textContent = data.followers;
  followers.appendChild(followerCount);

  const followingCount = document.createElement("div");
  followingCount.textContent = data.following;
  following.appendChild(followingCount);

  const locInfo = document.createElement("span");
  locInfo.textContent = data.location ? data.location : "Not available";
  location.appendChild(locInfo);

  const twitterUrl = document.createElement("span");
  data.twitter_username
    ? (twitterUrl.innerHTML = `<a href=https://twitter.com/${data.twitter_username}>${data.twitter_username}</a>`)
    : (twitterUrl.textContent = "Not available");
  twitter.appendChild(twitterUrl);

  const linkUrl = document.createElement("span");
  data.blog
    ? (linkUrl.innerHTML = `<a href=${data.blog}>${data.blog}</a>`)
    : (linkUrl.textContent = "Not available");
  link.appendChild(linkUrl);

  const companyInfo = document.createElement("span");
  companyInfo.textContent = data.company ? data.company : "Not Available";
  company.appendChild(companyInfo);
}

form.addEventListener("submit", handleSubmit);
