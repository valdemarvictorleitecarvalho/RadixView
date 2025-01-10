export function initTopNav() {
    const navSections = document.querySelectorAll('.nav-section');
    const sobreButton = document.querySelector('.nav-section.sobre');
    const homeButton = document.querySelector('.nav-section.home');
    const viewButton = document.querySelector('.nav-section.view');
    const mainContentHome = document.querySelector('.main-content-home');
    const mainContentSobre = document.querySelector('.main-content-sobre');
    const mainContentView = document.querySelector('.main-content-view');

    navSections.forEach((section) => {
        section.addEventListener('click', () => {
            navSections.forEach((s) => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
    
    homeButton.addEventListener('click', () => {
        if (mainContentSobre.classList.contains('fade-in')) {
            mainContentSobre.classList.remove('fade-in');
        }
        
        mainContentSobre.classList.add('fade-out');

        setTimeout(() => {
            mainContentSobre.style.display = 'none';
            mainContentView.style.display = 'none'; 
            mainContentHome.style.display = 'flex';
            
            setTimeout(() => {
                mainContentHome.classList.remove('fade-out');
                mainContentHome.classList.add('fade-in');
            }, 100);
        }, 500); 
    });

    sobreButton.addEventListener('click', () => {
        if (mainContentHome.classList.contains('fade-in')) {
            mainContentHome.classList.remove('fade-in');
        }

        mainContentHome.classList.add('fade-out');

        setTimeout(() => {
            mainContentHome.style.display = 'none'; 
            mainContentView.style.display = 'none';
            mainContentSobre.style.display = 'grid';

            setTimeout(() => {
                mainContentSobre.classList.remove('fade-out');
                mainContentSobre.classList.add('fade-in');
            }, 100);
        }, 500); 
    });

    viewButton.addEventListener('click', () => {
        if (mainContentView.classList.contains('fade-in')) {
            mainContentView.classList.remove('fade-in');
        }

        mainContentView.classList.add('fade-out');

        setTimeout(() => {
            mainContentHome.style.display = 'none';
            mainContentSobre.style.display = 'none';
            mainContentView.style.display = 'flex';

            setTimeout(() => {
                mainContentView.classList.remove('fade-out');
                mainContentView.classList.add('fade-in');
            }, 100);
        }, 500);
    });
}