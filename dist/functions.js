"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
sum(2, 7);
function log(name, userId) {
    console.log("hello", name, "with ID", userId || "anonym");
}
log("Eva", "125");
function some(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
