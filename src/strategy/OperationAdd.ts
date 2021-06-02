import Operation, { Operators } from  './Operation';

class OperationAdd implements Operation {

  doOperation(v: Operators): number {
    return v.numberA + v.numberB
  }
}

export default OperationAdd;
