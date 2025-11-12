
let number1 = '';
let number2 = '';

function updateDisplay(value) {
    let display = document.getElementById('display'); //document es para hacer referenia al doom y get busca el elemento del doom con la caracterisitca que diga display
    display.innerText += value; //innerText SIVER PARA concatenar el texto y usamos += para ir sumando caracteres con value
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.innerText = '';
    //number1 = '';
    //number2 = '';
}


function add(a, b) {
    const result = a + b;
    const display = document.getElementById('display');
    display.innerText = result;
    return result;
}

function subtract(a, b) {
    const result = a - b;
    const display = document.getElementById('display');
    display.innerText = result;
    return result;
}

function multiply(a, b) {
    const result = a * b;
    const display = document.getElementById('display');
    display.innerText = result;
    return result;
}

function divide(a, b) {
    const result = a / b;
    const display = document.getElementById('display');
    display.innerText = result;
    return result;
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult(){
    const display = document.getElementById('display');
    const expression = display.innerText;
    const operators = ['+', '-', '*', '/'];
    let operatorFound = null;

    for (let i = 0; i < expression.length; i++) {
        if (operators.includes(expression[i])) {
            operatorFound = expression[i];
            break;
        }
    }

    if (operatorFound) {
        const parts = expression.split(operatorFound);
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts.slice(1).join(operatorFound));

        // Validaciones
        if (isNaN(num1) || isNaN(num2)) {
            display.innerText = 'Error';
            return;
        }

        if (operatorFound === '/' && num2 === 0) {
            display.innerText = 'Error: división por cero';
            return;
        }

        switch (operatorFound) {
            case '+':
                add(num1, num2);
                break;
            case '-':
                subtract(num1, num2);
                break;
            case '*':
                multiply(num1, num2);
                break;
            case '/':
                divide(num1, num2);
                break;
        }
    }
}

