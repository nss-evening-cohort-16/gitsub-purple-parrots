import { renderToDom } from "./renderToDom.js";

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
const createProfile = () => {
  let domString = `
  <div class="card">
  <img src="https://ummokblog.files.wordpress.com/2017/06/mb1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Comicus, The Standup Philosopher (C0micus_HotWpt1)</h5>
    <p class="card-text">I am a standup philosopher, who also dabbles in code in my free time!</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Rome, Italy</li>
    <li class="list-group-item">github@C0micus_HotWpt1</li>
  </ul>
  <div class="card-body">
    <a href="https://www.youtube.com/watch?v=I9QBaKixc5I" class="card-link">Dayjob</a>
    <a href="https://github.com/nss-evening-cohort-16/gitsub-purple-parrots" class="card-link">GitHub</a>
  </div>
</div>
  `;
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
