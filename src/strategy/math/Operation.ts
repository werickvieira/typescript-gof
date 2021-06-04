
type Operators = {
  numberA: number;
  numberB: number;
};

interface Operation {
  doOperation: (values: Operators) => number;
}

export {
  Operation as default,
  Operators
}
