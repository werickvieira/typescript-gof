import Context from './Context';
import { Operators } from './Operation';
import Add  from './Add';
import Multiply from './Multiply';

const add = new Add();
const multiply = new Multiply();
const ctx = new Context(add);

const operators: Operators = {
  numberA: 10,
  numberB: 10,
}

console.log("Add: ", ctx.execute(operators));

ctx.setContext(multiply);

console.log("Multiply: ", ctx.execute(operators));

// https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// Verificar Lint
// Adicionar log
