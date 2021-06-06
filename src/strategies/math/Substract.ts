import Operation, { Operators } from './Operation';

class Substract implements Operation {

  doOperation(v: Operators): number {
    return v.numberA - v.numberB
  }
}

export default Substract;
