import { renderToDom } from "./renderToDom.js";
import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";

export const repoArray = [
  {
    name: "Pies",
    description: "the big pie",
  },
  {
    name: "Repository 2",
    description: "my 2nd repo",
  },
  {
    name: "Pet Adoptions",
    description: "Created for Project",
  },
  {
    name: "Cards Repository",
    description: "Repo for testing cards",
  },
  {
    name: "Sorting Hats",
    description: "Sorting hats project",
  },
];

const createRepoContainer = (array) => {
  let domString = "";
  array.forEach((repo) => {
    domString += `
    <div class="card container cardStyle" style="width: 18rem">
    <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
      <input class="star" type="checkbox" id="inlineCheckbox1" value="option1">
    </div>
</div>
  `;
  });
  renderToDom("#container1", domString);
  RepoSearchBar();
};

const RepoSearchBar = () => {
  let domString = `
  <input type="text" id="searchBar" placeholder="Repository Name">
  `;
  renderToDom("#searchBarBlock", domString);
};

const repoSearchFunction = (event) => {
  const searchRepoString = event.target.value.toLowerCase();
  const filterRepos = repoArray.filter((repo) => {
    return repo.name.toLowerCase().includes(searchRepoString);
  });
  createRepoContainer(filterRepos);
};

const createRepoForm = () => {
  let domString = `
  <form id="createRepo">
    <div class="mb-3">
        <label for="repoInput1" class="repo-label">Repository Name</label>
        <input type="text" class="form-control" id="repoInput1" aria-describedby="repoHelp">
      <div id="emailHelp" class="form-text"></div>
    </div>
      <div class="mb-3">
        <label for="inputDescription1" class="form-label">Description</label>
        <input type="text" class="form-control" id="inputDescription1">
    </div>
    <button type="submit" id="formButton" class="btn btn-primary">Create Repository</button>
  </form>
    `;
  renderToDom("#container2", domString);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#repoInput1").value,
    description: document.querySelector("#inputDescription1").value,
  };
  repoArray.push(newRepo);
  createRepoContainer(repoArray);
};

const repoClickEvents = () => {
  document
    .querySelector("#createRepo")
    .addEventListener("submit", handleFormSubmit);

  document
    .querySelector("#searchBarBlock")
    .addEventListener("keyup", repoSearchFunction);
};

export { createRepoForm, createRepoContainer, repoClickEvents };
