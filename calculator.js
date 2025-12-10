const { add, subtract, multiply, divide, power } = require("./operation");


const sum = add(2, 4);
const diff = subtract(6, 4);
const product = multiply(3, 3);
const quotient = divide(20, 2);
const pow = power(3, 2);

const results = { sum, diff, product, quotient, pow };

for (const name in results) {
  console.log(` ${name} => ${results[name]}`);
}
