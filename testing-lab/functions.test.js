const {
  greeting,
  returnTwo,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions");

require("./functions");

describe("return two function", () => {
  test("should return 2", () => {
    expect(returnTwo()).toBe(2);
  });
});

describe("take a name and add hello before it", () => {
  test("return hello plus James", () => {
    expect(greeting("James")).toBe("Hello, James.");
  });
  test("return hello plus Jill", () => {
    expect(greeting("Jill")).toBe("Hello, Jill.");
  });
});

describe("add two numbers together and return sum", () => {
  test("sum 1 and 2", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("sum 5 and 9", () => {
    expect(add(5, 9)).toBe(14);
  });
});

describe("check subtraction of two numbers", () => {
  test("subtract 1 and 2", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
  test("subtract 5 and 9", () => {
    expect(subtract(5, 9)).toBe(-4);
  });
});

describe("check multiplication of two numbers", () => {
  test("multiply 1 and 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test("multiply 5 and 9", () => {
    expect(multiply(10, 9)).toBe(90);
  });
});

describe("check divide of two numbers", () => {
  test("divide 1 and 2", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  test("divide 5 and 9", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
