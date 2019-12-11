// Functions (optional and default parameters)
function sum(a: number, b?: number): number {
  return a + (b || 0);
}

// Function type
type myFun = (a: number, b: number) => number;
const sum2: myFun = (a, b) => a + b; // inference

// Unknown number of arguments
function sumEverything(...numbers: number[]): number {
  // function sumEverything(args: string, arg2: boolean, ...numbers: number[]): number {
  return numbers.reduce((result, num) => result + num, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) args[0] * args[1];

  return Math.pow(args[0], 2);
}
