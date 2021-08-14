import { renderToDom } from "./renderToDom.js";
import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";

//array of projects
const projArray = [
  {
    name: "sorting-hat",
    description: "sort students into hogwarts houses",
  },
  {
    name: "pet-adoption",
    description: "pet adoption site for dogs, cats, and dinos",
  },
  {
    name: "product-cards",
    description: "selling plants",
  },
  {
    name: "pies",
    description: "pie recipebook",
  },
  {
    name: "test1",
    description: "repo practice",
  },
];

//creates card that will display all projects
const createProjectBoxOne = (array) => {
  let domString = "";
  array.forEach((project) => {
    domString += `
        <div class="projListContainer">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      `;
  });
  renderToDom("#block1", domString);
  createSortButton();
  createSearchBar();
};

//creates card with form to create a new project
const createProjectBoxTwo = () => {
  let domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Create a new project</h5>
    <h6 class="card-subtitle mb-2 text-muted">Coordinate, track, and update your work all in one place, so projects stay transparent and on schedule.</h6>
  <form id="createProj">
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Project Name: </label>
    <input required type="text" class="form-control" id="nameInput" placeholder="Example 2">
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description (optional): </label>
    <input type="text" textarea class="form-control" id="descInput" rows="3"></input>
    </div>
    <button id="projSubmit" class="btn btn-primary" type="submit">Create</button>
  </form>
</div>
</div>
  `;
  renderToDom("#block2", domString);
};

//function that handles the submission of create new project form
const handleFormSubmit = (event) => {
  event.preventDefault();
  const newProject = {
    name: document.querySelector("#nameInput").value,
    description: document.querySelector("#descInput").value,
  };
  projArray.push(newProject);
  createProjectBoxOne(projArray);
  document.querySelector("form").reset();
};

//function that creates the sort button
const createSortButton = () => {
  let domString = `
    <button id="sortBtn" class="btn" type="click">Sort A-Z</button>
  `;
  renderToDom("#block3", domString);
};

//function that sorts the projects alphabetically
const sortProjectsAZ = () => {
  createProjectBoxOne(
    projArray.sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
  );
};

//function creating searchbar
const createSearchBar = () => {
  let domString = `
  <input type="text" id="searchBarProj" placeholder="Search projects">
  `;
  renderToDom("#block4", domString);
};

//function to search through projects
const searchFunction = (event) => {
  const searchString = event.target.value.toLowerCase();
  const filterProjects = projArray.filter((project) => {
    return project.name.toLowerCase().includes(searchString);
  });
  createProjectBoxOne(filterProjects);
};

//function for click events
const clickEvents = () => {
  document
    .querySelector("#createProj")
    .addEventListener("submit", handleFormSubmit);
  document.querySelector("#block3").addEventListener("click", sortProjectsAZ);
  document.querySelector("#block4").addEventListener("keyup", searchFunction);
};

export { createProjectBoxOne, projArray, createProjectBoxTwo, clickEvents };
