import "../style.css";
import { initTopNav } from "./topnav.js";
import { initSocialLinks } from "./myinfo.js";
import { activeCodeHighlight } from "./codehigh.js";
import { trackHeadingClick } from "./htracker.js";
import { showDialogCreateSort } from "./createsort.js";
import { createInputs } from "./createsort.js";

createInputs();

showDialogCreateSort();

trackHeadingClick();

initTopNav();

initSocialLinks();

activeCodeHighlight();