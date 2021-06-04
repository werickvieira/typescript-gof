import { Operators } from  './Operation';
import Substract from "./Substract";

describe("SUBSTRACT CLASS BEHAVIOR", () => {

  const substract = new Substract();

  it("should return 0", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 10,
    }

    expect(substract.doOperation(operators)).toBe(0);

  });

  it("should return 8", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 2,
    }

    expect(substract.doOperation(operators)).toBe(8);

  });

  it("should return 20", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: -10,
    }

    expect(substract.doOperation(operators)).toBe(20);

  });

});
