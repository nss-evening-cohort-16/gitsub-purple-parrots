import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createPackages, buttonEvents, packages } from "./packages.js"
import { createProjectBoxOne, createProjectBoxTwo, projArray, clickEvents } from "./projects.js";

const init = () => {
  console.log(window.location.pathname);
  createNavBar();
  createProfile();
  createFooter();
  if (window.location.pathname.includes("packages")) {
    createPackages();
    buttonEvents();
  }
  if (window.location.pathname.includes("projects")) {
    createProjectBoxOne(projArray);
    createProjectBoxTwo();
    clickEvents();
  };
}
init();
