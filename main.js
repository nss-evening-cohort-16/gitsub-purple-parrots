import { createNavBar, createProfile, createFooter } from "./sharedLayout.js";
import { createPackages, buttonEvents, packages } from "./packages.js"

const init = () => {
  createNavBar();
  createProfile();
  createFooter();
  if (window.location.pathname.includes("packages")) {
    createPackages();
    buttonEvents();
  }
};

init();
