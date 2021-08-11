import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { buttonEvents, packagesForm } from "./packages.js"
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile();
  createFooter();
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
