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

ctx.setContext(add);
console.info("Add: ", ctx.execute(operators));

ctx.setContext(multiply);
console.info("Multiply: ", ctx.execute(operators));

ctx.setContext(substract);
console.info("Substract: ", ctx.execute(operators));

ctx.setContext(division);
console.info("Division: ", ctx.execute(operators));

// - ADICIONAR LOG
// - CRIAR O TESTE PARA FUNÇÃO DIVISION
// - VERIFICAR O USO DO NODEMON
// - VERIFICAR GRACEFUL SHUTDOWN
