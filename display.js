import {multiply} from "./operationES6.js";
const a = 6;
const b = 7;

const product = multiply(a, b);

const type = product %  2 === 0 ? "Even number" : "odd number";

console.log(`${a} * ${b} = ${product} (${type})`);