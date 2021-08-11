import { renderToDom } from "./renderToDom.js";


export const packages = []; 

const renderPackages = (array) => {
    let domString="";
    array.forEach((packet) =>{
        domString +=  `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${packet.name}</h5>
          <p class="card-text">${packet.description}</p>
        </div>
      </div>
    `
    });
    renderToDom("#block2", domString);
    
}

const packagesForm = () => {
    let domString=`
    <form id="packForm">
        <div class="mb-3">
            <label for="name" class="form-label">Package Name</label>
            <input required type="text" class="form-control" id="packName" placeholder="Something.js">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="packDescription" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
    renderToDom("#block1", domString);
    
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    if ( document.querySelector("#packName").value === "") {
        return;
    }
        const newPackage = {
        name: document.querySelector("#packName").value,
        description: document.querySelector("#packDescription").value
    };
    document.querySelector("form").reset();
    packages.push(newPackage);
    renderPackages(packages);
    
}


const buttonEvents = () => {
    document.querySelector("#packForm").addEventListener("submit", handleFormSubmit);
}

export { buttonEvents, packagesForm, handleFormSubmit }