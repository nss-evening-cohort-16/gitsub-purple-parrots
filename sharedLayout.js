import { renderToDom } from "./renderToDom.js";
import { userProfileData } from "./userProfileData.js";

//function to render the nav bar
const createNavBar = () => {
  let domString = `
  <nav class="navbar navbar-expand-lg navbar-light>
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Overview</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="repositories.html">Repositories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects.html">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="packages.html">Packages</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

  renderToDom("#navbar", domString);
};

//function to render profile area
const createProfile = (array) => {
  let domString = "";
  array.forEach((user) => {
    domString += `
  <div class="card">
  <img src="${user.img}" class="card-img-top" alt="${user.name}">
  <div class="card-body">
    <h5 class="card-title">${user.name}, ${user.title}</h5>
    <p class="card-text">${user.bio}</p>
  </div>
    <p>${user.location}</p>
    <p>${user.gitHubUserName}</p>
  <div class="card-body">
    <p>${user.socialMedia[0]}</p>
    <p>${user.socialMedia[1]}</p>
    <p>${user.socialMedia[2]}</p>
    <a href="${user.dayJobLink}" class="card-link">${user.dayJob}</a>
    <a href="${user.gitHubLink}" class="card-link">${user.gitHub}</a>
  </div>
</div>
  `;
  });
  renderToDom("#profile", domString);
};

//function to render footer
const createFooter = () => {
  let domString = `
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Github</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Terms</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Security</a>
  </li>
</ul>
  `;
  renderToDom("#footer", domString);
};

export { createNavBar, createProfile, createFooter };
