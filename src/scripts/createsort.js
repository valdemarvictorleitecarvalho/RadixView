import { radixAlgorithm } from "./radix";

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
        
        verifyInputIsNumber(input);

        divLabel.appendChild(label);
        divLabel.appendChild(input);
        
        inputContainer.appendChild(divLabel);
    }
    selectElement.addEventListener("change", createInputs);
}

function verifyInputIsNumber(input) {
    input.addEventListener("input", () => {
        const value = parseInt(input.value, 10);
    
        if (isNaN(value) || value < 0 || value > 999999) {
            input.setCustomValidity("Insira um número entre 0 e 999999.");
        } else {
            input.setCustomValidity("");
        }
    });
}

export function showDialogCreateSort() {
    const createSortButton = document.querySelector('.create-button');
    const cancelDialogButton = document.getElementById('cancel-dialog');
    const addElemDialogButton = document.getElementById('add-dialog');

    const dialog = document.querySelector('.dialog');

    createSortButton.addEventListener('click', () => {
        dialog.style.display = 'flex';
    });

    cancelDialogButton.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    addElemDialogButton.addEventListener('click', (e) => {
        e.preventDefault();
        radixAlgorithm.radixSort(receiveInputValues());
        dialog.style.display = 'none';
    });
}

function receiveInputValues() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const inputValues = [];

    inputs.forEach(input => {
        const value = parseInt(input.value, 10);
        inputValues.push(value); 
        input.value = '';
    });

    return inputValues;
}