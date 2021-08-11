import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { projectForm, projectCards } from "./overview.js";


const init = () => {
  if (window.location.pathname.includes("index")) {
    projectForm();
    projectCards();
  }


  createNavBar();
  createProfile();
  createFooter();
};

init();
