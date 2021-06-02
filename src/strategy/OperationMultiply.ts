import Operation, { Operators } from  './Operation';

class OperationMultiply implements Operation {

  doOperation(v: Operators): number {
    return v.numberA * v.numberB
  }
}

export default OperationMultiply;
