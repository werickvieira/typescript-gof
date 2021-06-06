import { Operators } from  './Operation';
import Add from "./Add";

describe("ADD CLASS BEHAVIOR", () => {

  const add = new Add();

  it("should return 20", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 10,
    }

    expect(add.doOperation(operators)).toBe(20);

  });

  it("should return 8", () => {
    const operators: Operators = {
      numberA: 5,
      numberB: 3,
    }

    expect(add.doOperation(operators)).toBe(8);

  });

  it("should return 0", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: -10,
    }

    expect(add.doOperation(operators)).toBe(0);

  });

});
