import Operation, { Operators } from  './Operation';

class Multiply implements Operation {

  doOperation(v: Operators): number {
    return v.numberA * v.numberB
  }
}

export default Multiply;
