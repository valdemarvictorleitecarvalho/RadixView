export function initTopNav() {
    const navSections = document.querySelectorAll('.nav-section');
    const sobreButton = document.querySelector('.nav-section.sobre');
    const homeButton = document.querySelector('.nav-section.home');
    const mainContent = document.querySelector('.main-content');

    navSections.forEach((section) => {
        section.addEventListener('click', () => {
            navSections.forEach((s) => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
    
    homeButton.addEventListener('click', () => {
        mainContent.style.display = 'flex'; 
        setTimeout(() => {
            mainContent.classList.remove('fade-out');
            mainContent.classList.add('fade-in'); 
        }, 10); 
    });
    
    sobreButton.addEventListener('click', () => {
        mainContent.classList.remove('fade-in');
        mainContent.classList.add('fade-out');
        
        setTimeout(() => {
            mainContent.style.display = 'none'; 
        }, 500);
    });
}