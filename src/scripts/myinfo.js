export function initSocialLinks() {
    const githubButton = document.querySelector('.github');
    const linkedinButton = document.querySelector('.linkedin');
    
    githubButton.addEventListener('click', () => {
        window.open("https://github.com/valdemarvictorleitecarvalho", "_blank");
    });

    linkedinButton.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/valdemar-carvalho-815408334/", "_blank");
    });
}