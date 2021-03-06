import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import {
  createRepoForm,
  createRepoContainer,
  repoArray,
  repoClickEvents,
} from "./repositories.js";
import {
  createProjectBoxOne,
  createProjectBoxTwo,
  projArray,
  clickEvents,
} from "./projects.js";
import { buttonEvents, packagesForm } from "./packages.js";
import {
  renderAboutMe,
  projectForm,
  projectCards,
  projectArray,
  overviewClickEvents,
} from "./overview.js";
import { userProfileData } from "./userProfileData.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile(userProfileData);
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
    renderAboutMe();
    projectForm();
    projectCards(projectArray);
    overviewClickEvents();
  }
};

init();
