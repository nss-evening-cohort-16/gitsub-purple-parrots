import { renderToDom } from "./renderToDom.js";

export const packages = [];

const renderPackages = (array) => {
  let domString = "";
  array.forEach((packet, i) => {
    domString += `
        <div id="packet-card" class="card cardStyle packetCardStyle" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${packet.name}</h5>
                <p class="card-text">${packet.description}</p>
            </div>
            <button type="button" id="${i}" class="btn btn-primary">Delete</button>
        </div>
    `;
  });
  renderToDom("#block2", domString);
  searchBarBuilder();
};

const deletePackage = (event) => {
  const deleteBtnId = event.target.id;
  const targetType = event.target.type;
  if (targetType === "button") {
    packages.splice(deleteBtnId, 1);
    renderPackages(packages);
  }
};

const packagesForm = () => {
  let domString = `
    <form id="packForm" class="cardStyle">
        <div class="mb-3 packFormTop">
            <label for="name" class="form-label">Package Name</label>
            <input required type="text" class="form-control" id="packName" placeholder="Something.js">
        </div>
        <div class="mb-3 packFormBottom">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="packDescription" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
  renderToDom("#block1", domString);
};

const searchBarBuilder = () => {
    let domString = `
    <input type="text" id="searchBar" placeholder="Search packages">
    `;
    renderToDom("#block3", domString);
  };
  
const searchBarFunction = (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredPackages = packages.filter((packet) => {
      return packet.name.toLowerCase().includes(searchString);
    });
    renderPackages(filteredPackages);
  };

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (document.querySelector("#packName").value === "") {
    return;
  }
  const newPackage = {
    name: document.querySelector("#packName").value,
    description: document.querySelector("#packDescription").value,
  };
  document.querySelector("form").reset();
  packages.push(newPackage);
  renderPackages(packages);
};

const buttonEvents = () => {
  document
    .querySelector("#packForm")
    .addEventListener("submit", handleFormSubmit);
  document.querySelector("#block2").addEventListener("click", deletePackage);
  document.querySelector("#block3").addEventListener("keyup", searchBarFunction);
};

export { buttonEvents, packagesForm };
  
