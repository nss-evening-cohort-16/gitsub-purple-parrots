import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createRepoForm, createRepoContainer, createRepo } from "./repositories.js";
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile();
  createFooter();
  
  if (window.location.pathname.includes("repositories")) {
    createRepoForm();
    createRepoContainer(createRepo);
  }
  if (window.location.pathname.includes("projects")) {
    createProjectBoxOne(projArray);
    createProjectBoxTwo();
    clickEvents();
  }
};

init();
