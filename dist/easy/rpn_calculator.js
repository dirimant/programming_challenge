"use strict";
function operate(operator, firstValue, secondValue) {
    const operatorsInterface = {
        'ADDITION': '+',
        'SUBSTRACTION': '-',
        'MULTIPLICATION': '*',
        'DIVISION': '/',
        'POW': '^',
    };
    switch (operator) {
        case operatorsInterface.ADDITION:
            return firstValue + secondValue;
        case operatorsInterface.SUBSTRACTION:
            return firstValue - secondValue;
        case operatorsInterface.MULTIPLICATION:
            return firstValue * secondValue;
        case operatorsInterface.DIVISION:
            return firstValue / secondValue;
        case operatorsInterface.POW:
            return Math.pow(firstValue, secondValue);
        default:
            console.log('Unknown operator');
            return 0;
    }
}
function isOperator(operator) {
    const operators = [
        '+', '-', '*', '/', '^',
    ];
    if (operators.includes(operator)) {
        return true;
    }
    else {
        return false;
    }
}
// Verify if array of values is RPN compatible
function isStringRPNCompatible(calculationSplited) {
    let containsNumber = false;
    if (!calculationSplited.length)
        return false;
    for (let i = 0; i < calculationSplited.length; i++) {
        if (!(Number(calculationSplited[i]) || isOperator(calculationSplited[i]))) {
            return false;
        }
        else if (Number(calculationSplited[i])) {
            containsNumber = true;
        }
    }
    if (!containsNumber)
        return false;
    return true;
}
function calculateRPN(calculationString) {
    const calculationSplited = calculationString.split("");
    let stack = new Array();
    if (!isStringRPNCompatible(calculationSplited))
        return 'Stack is either empty or not RPN compatible.';
    for (let i = 0; i < calculationSplited.length; i++) {
        if (isOperator(calculationSplited[i]) && stack.length >= 2) {
            stack[stack.length - 2] = operate(calculationSplited[i], stack[stack.length - 2], stack[stack.length - 1]);
            stack.pop();
        }
        else if (isOperator(calculationSplited[i])) {
            stack[stack.length - 2] = operate(calculationSplited[i], 0, stack[stack.length - 1]);
            stack.pop();
        }
        else {
            stack.push(+calculationSplited[i]);
        }
        console.log(stack);
    }
    return stack;
}
const start = performance.now();
console.log(calculateRPN('192-332*43-23/3'));
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
