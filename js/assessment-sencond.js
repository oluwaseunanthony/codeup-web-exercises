"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// 1.
function isBoolean(value){
    return typeof value === "boolean";
}

//2.
function isString(value) {
    return typeof value === 'string' || (typeof value === 'number' && !isNaN(value));
}

// 3. isNotString
function isNotString(value) {
    return typeof value !== 'string' && (typeof value !== 'number' || isNaN(value));
}

//4.isEmptyString

function isEmptyString(value) {
    return value === "";
}

// 5. isNotANumber

function isNotANumber(value) {
    return isNaN(value) || (typeof value !== 'number' && typeof value !== 'string');
}

// 6.isNegative

function isNegative(value) {
    return Number(value) < 0;
}

// 7.isPositive

function isPositive(value) {
    return Number(value) > 0 && !isNaN(value);
}

// 8.isZero

function isZero(value) {
    return Number(value) === 0;
}


// 9. isArray

function isArray(value) {
    return Array.isArray(value);
}


// 10. upperCase

function upperCase(value) {
    if (typeof value === 'string' && !isNaN(value)) {
        return value.toUpperCase();
    } else {
        return false;
    }
}
