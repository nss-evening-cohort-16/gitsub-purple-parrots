import { renderToDom } from "./renderToDom.js";

// {/* <div id="navbar"></div>
// <div id="profile"></div>
// <div id="pinnedProject" class="aBlock"></div>
// <div id="newProject" class="bBlock"></div>
// <div id="footer"></div> */}

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
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${project.projectName}</h5>
                            <p class="card-text"> ${project.projectDescription}</p>
                        </div>
                    </div>
                </div>
            </div>`

});
renderToDom("#pinnedProject", domString);
};

const projectForm = () => {
    let domString = `
        <div id="formTitle">Create a new Project</div>
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
        <div id="projectBtn">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>`


    renderToDom("#newProject", domString);
};

export {projectCards, projectForm };