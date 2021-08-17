import { renderToDom } from "./renderToDom.js";

const renderAboutMe = () => {
  let domString = `
        <div class="card">
            <h5 class="card-title">Hi, I'm Comicus! The standup philospher!</h5>
            <hr>
            <div class="imgDiv">
                <img src="https://padresteve.files.wordpress.com/2011/10/history-of-the-world-part-i-brooks.jpg" class="card-img-top" alt="Comicus the Standup Philosohper">
            </div>
            <div class="card-body">
                
                <p class="card-text">I just got back from Venice and boy are my arms tired. Please take a look at some of my recent projects.</p>
            </div>
        </div>`;

  renderToDom("#aboutMe", domString);
};

const projectArray = [
  {
    projectName: "Project 1",
    projectDescription: "description 1",
  },
  {
    projectName: "Project 2",
    projectDescription: "description 2",
  },
  {
    projectName: "Project 3",
    projectDescription: "description 3",
  },
];

const projectCards = (array) => {
  let domString = "";
  array.forEach((project, i) => {
    domString += `
            <div class="card cardStyle" style="width: 18rem">
                <h5 class="card-title">${project.projectName}</h5>
                <p class="card-text">${project.projectDescription}</p>
                <button type="button" id=delete--${i} class="btn btn-danger btn-delete">Delete</button></button>
            </div>`;
  });
  renderToDom("#pinnedProject", domString);
  document
    .querySelector("#pinnedProject")
    .addEventListener("click", deleteProject);
};

const deleteProject = (event) => {
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    const [method, id] = targetId.split("--");

    if (method === "delete") {
      projectArray.splice(id, 1);
      projectCards(projectArray);
    }
  }
};

const projectForm = () => {
  let domString = `
        <form id="subProjectForm">
        <div class="mb-3">Pin a Project</div>
            <p id="formSubText">Keep track of your favorite projects by pinning them.</p>
            <hr>
        <div class="mb-3">
            <label for="projectName" class="form-label">Project Name</label>
            <input type="name" class="form-control" id="nameInput" placeholder="Project Name">
        </div>
        <div class="mb-3">
            <label for="descriptionText" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="descriptionInput" rows="3"></textarea>
        </div>
        <hr>
        <form id="projectBtn">
        <button type="submit" class="btn btn-primary">Pin</button>
      </form>`;

  renderToDom("#newProjectForm", domString);
};

const ovwHandleFormSubmit = (event) => {
  event.preventDefault();
  const ovwNewProject = {
    projectName: document.querySelector("#nameInput").value,
    projectDescription: document.querySelector("#descriptionInput").value,
  };
  projectArray.push(ovwNewProject);
  projectCards(projectArray);
  document.querySelector("form").reset();
};

const overviewClickEvents = () => {
  document
    .querySelector("#subProjectForm")
    .addEventListener("submit", ovwHandleFormSubmit);
};

export {
  renderAboutMe,
  projectCards,
  projectForm,
  projectArray,
  overviewClickEvents,
};
