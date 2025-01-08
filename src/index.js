import "./style.css";
import { greeting } from "./greeting.js";

const githubButton = document.querySelector('.github');
const linkedinButton = document.querySelector('.linkedin');
const navSections = document.querySelectorAll('.nav-section');

navSections.forEach((section) => {
    section.addEventListener('click', () => {
        navSections.forEach((s) => s.classList.remove('active'));
        section.classList.add('active');
    });
});

githubButton.addEventListener('click', () => {
    window.open("https://github.com/valdemarvictorleitecarvalho", "_blank");
});

linkedinButton.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/valdemar-carvalho-815408334/", "_blank"); 
});

console.log(greeting);
