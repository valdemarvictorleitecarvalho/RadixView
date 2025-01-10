export function showDialogCreateSort() {
    const createSortButton = document.querySelector('.create-button');
    const dialog = document.querySelector('.dialog');

    createSortButton.addEventListener('click', () => {
        dialog.style.display = 'flex';
    });
}

export function createInputs() {
    const selectElement = document.getElementById("number-select");
    const inputContainer = document.getElementById("input-container");
    
    inputContainer.innerHTML = '';

    const quantity = parseInt(selectElement.value, 10);

    for (let i = 0; i < quantity; i++) {
        const divLabel = document.createElement("div-label");
        
        const label = document.createElement("label");
        label.setAttribute("for", `input-number-${i}`);
        label.textContent = `Digite o número ${i + 1}:`;

        const input = document.createElement("input");
        input.type = "text";
        input.id = `input-number-${i}`;
        input.name = `inputNumber-${i}`;
        input.required = true;


        divLabel.appendChild(label);
        divLabel.appendChild(input);
        
        inputContainer.appendChild(divLabel);
    }
    selectElement.addEventListener("change", createInputs);
}