import "../style.css";
import { initTopNav } from "./topnav.js";
import { initSocialLinks } from "./myinfo.js";
import { activeCodeHighlight } from "./codehigh.js";
import { trackHeadingClick } from "./htracker.js";
import { showDialogCreateSort, createInputs, flowSortButtons } from "./createsort.js";
import { lateLoad } from "./loadsvg.js";

lateLoad();

createInputs();

flowSortButtons();

showDialogCreateSort();

trackHeadingClick();

initTopNav();

initSocialLinks();

activeCodeHighlight();