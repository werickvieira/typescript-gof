import { Operators } from  './Operation';
import Multiply from "./Multiply";

describe("MULTIPLY CLASS BEHAVIOR", () => {

  const mult = new Multiply();

  it("should return 10", () => {
    const operators: Operators = {
      numberA: 5,
      numberB: 2,
    }

    expect(mult.doOperation(operators)).toBe(10);

  });

  it("should return 8", () => {
    const operators: Operators = {
      numberA: 2,
      numberB: 4,
    }

    expect(mult.doOperation(operators)).toBe(8);

  });

  it("should return 0", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 0,
    }

    expect(mult.doOperation(operators)).toBe(0);

  });

});
