
export function isValidNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    }
    return true;
  }
export function add(a, b) {
    if (!isValidNumber(a, b)) return "Invalid input";
    return a + b;
}

export function subtract(a, b) {
    if (!isValidNumber(a, b)) return "Invalid input";
    return a - b;
}

export function multiply(a, b) {
    if (!isValidNumber(a, b)) return "Invalid input";
    return a * b;
}


export function divide(a, b) {
    if (!isValidNumber(a, b)) return "Invalid input";
    if (b === 0) return "Error: Division by zero";
    return a / b;
}


export function power(base, exponent) {
    if (!isValidNumber(base, exponent)) return "Invalid input";
    if (exponent < 0) {
        return 1 / Math.pow(base, Math.abs(exponent));
    }

    return Math.pow(base, exponent);
}

