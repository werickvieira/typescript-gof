import Operation, { Operators } from  './Operation';

class Division implements Operation {

  doOperation(v: Operators): number {
    return v.numberA / v.numberB
  }
}

export default Division;
