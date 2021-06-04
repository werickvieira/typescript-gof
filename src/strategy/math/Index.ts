import Context from './Context';
import { Operators } from './Operation';
import Add  from './Add';
import Substract  from './Substract';
import Multiply from './Multiply';
import Division from './Division';

const add = new Add();
const substract = new Substract();
const multiply = new Multiply();
const division = new Division();
const ctx = new Context();

const operators: Operators = {
  numberA: 10,
  numberB: 10,
}

// Add operation
ctx.setContext(add);
console.log("Add: ", ctx.execute(operators));

// Multiply operation
ctx.setContext(multiply);
console.log("Multiply: ", ctx.execute(operators));

// Substract operation
ctx.setContext(substract);
console.log("Substract: ", ctx.execute(operators));

// Division operation
ctx.setContext(division);
console.log("Division: ", ctx.execute(operators));
