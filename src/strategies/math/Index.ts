import Context from './Context';
import { Operators } from './Operation';
import Add  from './Add';
import Substract  from './Substract';
import Multiply from './Multiply';
import Division from './Division';
import Logger from '../../helpers/log/index';

const logger = Logger.child({ "package":"strategy/math" })

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

logger.log('debug', {
  method: 'add',
  parameters: operators,
  result: ctx.execute(operators)
});

ctx.setContext(multiply);

logger.log('debug', {
  method: 'multiply',
  parameters: operators,
  result: ctx.execute(operators)
});

ctx.setContext(substract);

logger.log('debug', {
  method: 'substract',
  parameters: operators,
  result: ctx.execute(operators)
});

ctx.setContext(division);

logger.log('debug', {
  method: 'division',
  parameters: operators,
  result: ctx.execute(operators)
});

ctx.setContext(add);

operators.numberA = 100
operators.numberB = 200

logger.log('debug', {
  method: 'add',
  parameters: operators,
  result: ctx.execute(operators)
});
