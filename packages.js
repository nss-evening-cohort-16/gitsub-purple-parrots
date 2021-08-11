import { renderToDom } from "./renderToDom.js";


export const packages = []; 

const createPackages = () => {
    let domstring="";
    packages.forEach((packet, i) =>{
        domstring +=  `
    <div id="bodyBlock">
        <div class="mb-3">
            <label for="name" class="form-label">${packet.name}</label>
            <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Something.js">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">${packet.description}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="subButton" id=${i} class="btn btn-primary">Submit</button>
    </div>
    `

    renderToDom("#bodyBlock", domstring)
    })
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    if ( document.querySelector("#name").value === "") {
        return;
    }
    if (event.target.id === "subButton"){
    const newPackage = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value
    };
    packages.push(newPackage);
    renderPackages(packages);
    }
}

const buttonEvents = () => {
    document.querySelector("#bodyBlock").addEventListener("click", handleFormSubmit);
}

export { createPackages, buttonEvents }