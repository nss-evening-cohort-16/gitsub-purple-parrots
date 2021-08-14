import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createRepoForm, createRepoContainer, repoArray, repoClickEvents } from "./repositories.js";
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";
<<<<<<< HEAD
import { projectForm, projectCards, projectArray, overviewClickEvents, renderAboutMe } from "./overview.js";
=======
import { buttonEvents, packagesForm } from "./packages.js"
import { projectForm, projectCards, projectArray, overviewClickEvents } from "./overview.js";
>>>>>>> 1e54ff3a165f5c0968c916235c3301e632152acd

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
    renderAboutMe();
  }

  
};

init();
