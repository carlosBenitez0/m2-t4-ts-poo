class Calculator {
  public sum = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  public subtract = (n1: number, n2: number): number => {
    return n1 - n2;
  };

  public multiply = (n1: number, n2: number): number => {
    return n1 * n2;
  };

  public divide = (n1: number, n2: number): number => {
    if (n2 === 0) {
      throw new Error("Division by zero");
    }
    return n1 / n2;
  };

  public power = (n1: number, n2: number): number => {
    return Math.pow(n1, n2);
  };

  public factorial = (number: number): number => {
    if (number < 0) {
      throw new Error("Factorial cant be negative");
    } else if (number == 0 || number == 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  };
}

const calculator = new Calculator();

console.log("Sum:", calculator.sum(100, 20));
console.log("Subtract:", calculator.subtract(3, 5));
console.log("Multiply:", calculator.multiply(1, 9));
console.log("Divide:", calculator.divide(40, 0));
console.log("Power:", calculator.power(5, 2));
console.log("Factorial:", calculator.factorial(10));
