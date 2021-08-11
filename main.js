import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";
import { projectForm, projectCards, projectArray, overviewClickEvents } from "./overview.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile();
  createFooter();

 

  if (window.location.pathname.includes("projects")) {
    createProjectBoxOne(projArray);
    createProjectBoxTwo();
    clickEvents();
  }
  else if (window.location.pathname.includes("index")) {
    projectForm(); 
    projectCards(projectArray);
    overviewClickEvents();
    
  }

  
};

init();
