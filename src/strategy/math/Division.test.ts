import { Operators } from  './Operation';
import Division from "./Division";

describe("DIVISION CLASS BEHAVIOR", () => {

  const div = new Division();

  it("should return 1", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 10,
    }

    expect(div.doOperation(operators)).toBe(1);

  });

  it("should return 8", () => {
    const operators: Operators = {
      numberA: 16,
      numberB: 2,
    }

    expect(div.doOperation(operators)).toBe(8);

  });

  it("should return an Infinity", () => {
    const operators: Operators = {
      numberA: 10,
      numberB: 0,
    }

    expect(div.doOperation(operators)).toBe(Infinity);

  });

});
