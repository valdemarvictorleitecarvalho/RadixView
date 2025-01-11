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
    const cancelDialogAddButton = document.getElementById('cancel-dialog');
    const addElemDialogButton = document.getElementById('add-dialog');

    const howUseButton = document.getElementById('how-use-button');
    const howUseCancelButton = document.getElementById('how-use-cancel');

    const dialog = document.getElementById('createRadix')   
    const dialogHowUse = document.getElementById('howUseRadix');

    createSortButton.addEventListener('click', () => {
        dialog.style.display = 'flex';
        howUseButton.classList.remove('active');
    });

    cancelDialogAddButton.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    addElemDialogButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        radixAlgorithm.radixSort(receiveInputValues());
        radixAlgorithm.controller.play();
        dialog.style.display = 'none';
    });

    howUseButton.addEventListener('click', () => {
        dialogHowUse.style.display = 'flex';
    });

    howUseCancelButton.addEventListener('click', () => {
        dialogHowUse.style.display = 'none';
        howUseButton.classList.remove('active');
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

export function flowSortButtons() {
    document.getElementById('play').addEventListener('click', () => {
        radixAlgorithm.controller.play();
    });
    
    document.getElementById('pause').addEventListener('click', () => {
        radixAlgorithm.controller.pause();
    });
    
    document.getElementById('rewind').addEventListener('click', () => {
        try {
            radixAlgorithm.controller.rewind();
        }
        catch (e) {
            console.error(e.message);
        } 
    });
    
    document.getElementById('forward').addEventListener('click', () => {
        try {
            radixAlgorithm.controller.forward();
        }
        catch (e) {
            console.error(e.message);
        } 
    });
}
