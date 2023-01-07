"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
const sum3 = function (a, b) {
    return a + b;
};
sum(1, 2);
function log(name, userId) {
    console.log('hello', name, 'with ID', userId || 'anonym');
}
log('Eva', '125');
function some(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
function crash() {
    throw new Error('crash');
}
