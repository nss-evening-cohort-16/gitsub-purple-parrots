import { renderToDom } from "./renderToDom.js";
import { userProfileData } from "./userProfileData.js";

//function to render the nav bar
const createNavBar = () => {
  let domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
  <div class="card" style="width: 18rem;">
  <img src="${user.img}" class="card-img-top" alt="${user.name}">
  <div class="card-body">
    <h5 class="card-title">${user.name}, ${user.title}</h5>
    <p class="card-text">${user.bio}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.location}</li>
    <li class="list-group-item">${user.gitHubUserName}</li>
  </ul>
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
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
  `;
  renderToDom("#footer", domString);
};


export { createNavBar, createProfile, createFooter };
