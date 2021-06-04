import Operation, { Operators } from './Operation';

class Add implements Operation {

  doOperation(v: Operators): number {
    return v.numberA + v.numberB
  }
}

export default Add;
