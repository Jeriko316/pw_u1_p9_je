let currentExpression = '';  // Guarda toda la expresión (ej: "7+2*3")
let resetDisplay = false;

function updateDisplay(value) {
    const display = document.getElementById('display');

    // Si se presionó "=" antes, limpiar pantalla
    if (resetDisplay) {
        display.innerText = '';
        currentExpression = '';
        resetDisplay = false;
    }

    // Evitar múltiples puntos seguidos
    const lastChar = display.innerText.slice(-1);
    if (value === '.' && (lastChar === '.' || lastChar === '')) return;

    // Evitar operadores seguidos
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    // Agregar valor al display y a la expresión
    display.innerText += value;
    currentExpression += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '';
    currentExpression = '';
    resetDisplay = false;
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
}

function percentage() {
    const display = document.getElementById('display');
    if (display.innerText === '') return;
    
    // Convierte el número actual en porcentaje (divide entre 100)
    const result = parseFloat(display.innerText) / 100;
    display.innerText = result;
    currentExpression = result.toString();
    resetDisplay = true;
}

function calculateResult() {
    const display = document.getElementById('display');
    if (currentExpression === '') return;

    try {
        const result = eval(currentExpression); // evalúa la expresión (7+2*3)
        display.innerText = result;
        currentExpression = result.toString();
        resetDisplay = true; // indica que el siguiente número reinicia el display
    } catch {
        display.innerText = 'Error';
        currentExpression = '';
        resetDisplay = true;
    }
}
