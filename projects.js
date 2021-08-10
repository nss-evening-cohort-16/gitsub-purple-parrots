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
  }
];

//creates card that will display all projects
const createProjectBoxOne = (array) => {
    let domString = "";
    array.forEach((project) => {
      domString += `
        <div class="container">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      `;
    });
  renderToDom("#block1", domString);
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
};

//function for click events
const clickEvents = () => {
  document
    .querySelector("#createProj")
    .addEventListener("submit", handleFormSubmit);
};

export { createProjectBoxOne, projArray, createProjectBoxTwo, clickEvents };
