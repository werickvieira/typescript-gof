
//- https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm

import Context from './Context';
import { Operators } from './Operation';
import OperationAdd  from './OperationAdd';
import OperationMultiply from './OperationMultiply';

let add = new OperationAdd();
let ctx = new Context(add);

let operators: Operators = {
  numberA: 10,
  numberB: 10,
}

console.log("Add: ", ctx.execute(operators));

let multiply = new OperationMultiply();
ctx.setContext(multiply);

console.log("Multiply: ", ctx.execute(operators));
