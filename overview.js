import { renderToDom } from "./renderToDom.js";

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

const projectCards = (prjCard) => {
    let domString = "";
    prjCard.forEach((project) => {
        domString += `
            <div class="container"></div>
                <div class="card-body">
                    <h5 class="card-title">${project.projectName}</h5>
                    <p class="card-text">${project.projectDescription}</p>
                </div>
            </div>`

    });
    renderToDom("#pinnedProject", domString);
};

const projectForm = () => {
    let domString = `
        <form id="subProjectForm">
        <div class="mb-3">Create a new Project</div>
            <p id="formSubText">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`

    
    renderToDom("#newProject", domString);
};

const ovwHandleFormSubmit = (event) => {
    event.preventDefault();
    const ovwNewProject = {
        name: document.querySelector("#nameInput").value,
        description: document.querySelector("#descriptionInput").value,
    };
    
    projectArray.push(ovwNewProject);
    console.log(projectArray);
    projectCards(projectArray);
    document.querySelector("form").reset();
};
  
  const overviewClickEvents = () => {
    document
      .querySelector("#subProjectForm")
      .addEventListener("submit", ovwHandleFormSubmit);
};


export { projectCards, projectForm, projectArray, overviewClickEvents };