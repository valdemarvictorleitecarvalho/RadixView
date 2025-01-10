export function showDialogCreateSort() {
    const createSortButton = document.querySelector('.create-button');
    const dialog = document.querySelector('.dialog');

    createSortButton.addEventListener('click', () => {
        dialog.style.display = 'flex';
    });
}
