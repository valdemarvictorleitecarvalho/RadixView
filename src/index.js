import "./style.css";
import { initTopNav } from "./topnav.js";
import { initSocialLinks } from "./myinfo.js";
import { activeCodeHighlight } from "./codehigh.js";
import { trackHeadingClick } from "./htracker.js";

trackHeadingClick();

initTopNav();

initSocialLinks();

activeCodeHighlight();