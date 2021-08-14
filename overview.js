import { renderToDom } from "./renderToDom.js";

const renderAboutMe = () => {
    let domString = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>`;

    renderToDom("#aboutMe", domString);
}

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
            <div class="container" style="width: 18rem></div>
                <div class="card-body">
                    <h5 class="card-title">${project.projectName}</h5>
                    <p class="card-text">${project.projectDescription}</p>
                    <button type="button" id=delete--${i} class="btn btn-danger btn-delete">Delete</button></button>
                </div>
            </div>`;
    });
    renderToDom("#pinnedProject", domString);
    document.querySelector("#pinnedProject").addEventListener("click", deleteProject);
};

const deleteProject = (event) => {
    
    const targetType = event.target.type;
    const targetId = event.target.id;

    if (targetType === "button"){
        const [method,id] = targetId.split("--");

        if (method === "delete"){
        projectArray.splice(id,1);
        projectCards(projectArray);
        };
    };
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
    document.querySelector("#subProjectForm").addEventListener("submit", ovwHandleFormSubmit);  

};


export { projectCards, projectForm, projectArray, renderAboutMe, overviewClickEvents };

