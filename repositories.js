import { renderToDom } from "./renderToDom.js";
import { createNavBar, createProfile, createFooter } from "./sharedLayout.js"

export const createRepo = [
{
  name: "pies",
  description: "the big pie",
}
];

const createRepoForm = () => {
    let domString = `
    <form>
    <div class="mb-3">
        <label for="repoInput1" class="repo-label">Repository Name</label>
        <input type="text" class="form-control" id="repoInput1" aria-describedby="repoHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
      <div class="mb-3">
        <label for="inputDescription1" class="form-label">Description</label>
        <input type="text" class="form-control" id="inputDescription1">
    </div>
    <button type="button" id="formButton" class="btn btn-primary">Create Repository</button>
</form>
    `
    renderToDom("#container2" ,domString);
};

const createRepoContainer = () => {
  let domString = `
  
  `
  renderToDom("#container1" ,domString);

}
const repoBuilder = (array) => {
    let domString = "";
    array.forEach((object, i) => {
        domString += `
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${object.name}</h5>
            <p class="card-text">${object.house}</p>
              
              <button type="button" id=${i} id="expelButton" class="btn btn-primary">Expel</button>
          </div>
        </div>
        `
      renderToDom("#studentCard", domString);
      const expel = document.querySelector("#expelButton");
      expel.addEventListener("click", expelStudent);
}
)};
export { createRepoForm, createRepoContainer }