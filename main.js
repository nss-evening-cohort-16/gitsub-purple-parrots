import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createRepoForm, createRepoContainer, repoArray, repoClickEvents } from "./repositories.js";
import { buttonEvents, packagesForm } from "./packages.js"
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents, searchBar } from "./projects.js";
import { projectForm, projectCards, projectArray, overviewClickEvents } from "./overview.js";

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
  }
  if (window.location.pathname.includes("index")) {
    projectForm(); 
    projectCards(projectArray);
    overviewClickEvents();
  }

  
};

init();
