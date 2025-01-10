export function trackHeadingClick() {
    const headings = document.querySelectorAll('h2');
    const listItems = document.querySelectorAll('.text-tracker ul li');

    function scrollToH(event) {
        const headingIndex = event.target.getAttribute('data-heading');
        const targetHeading = headings[headingIndex];

        listItems.forEach((li) => li.classList.remove('active'));
        event.target.classList.add('active');

        if (targetHeading) {
            targetHeading.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    listItems.forEach((li) => {
        li.addEventListener('click', scrollToH);
    });
}
