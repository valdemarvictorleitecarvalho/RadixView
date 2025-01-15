export function lateLoad() {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector('.container');

        container.style.visibility = 'visible';
    });
};