import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createRepoForm, createRepoContainer, repoArray, repoClickEvents } from "./repositories.js";
import { buttonEvents, packagesForm } from "./packages.js"
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile();
  createFooter();
  
  if (window.location.pathname.includes("repositories")) {
    createRepoContainer(repoArray);
    createRepoForm();
    repoClickEvents();
  }
  if (window.location.pathname.includes("packages")) {
    packagesForm();
    buttonEvents();
  }
  if (window.location.pathname.includes("projects")) {
    createProjectBoxOne(projArray);
    createProjectBoxTwo();
    clickEvents();
  };
}
init();
