import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createRepoForm, createRepoContainer, createRepo } from "./repositories.js";

const init = () => {
  createNavBar();
  createProfile();
  createFooter();
  
  if (window.location.pathname.includes("repositories")) {
    createRepoForm();
    createRepoContainer(createRepo);
  }
};

init();
