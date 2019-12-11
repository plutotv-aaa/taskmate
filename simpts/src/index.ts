// import { Robot, FlyingRobot } from "./robot";

// const a = 3;
// const b = 4;

// console.log(`${a} * ${b} = ${multiply(a, b)}`);
// console.log(`${b} multiplied by 2 = ${multi2(b)}`);

// // Number
// let num: number = 1 + 0b1 + 0o1 + 0x1;

// // String
// const hello: string = "Hello";
// const world: string = "World";
// const helloworld = `
//     ${2 + 2}
//     ${world}
// `;

// // Null and undefined
// let n: null = null;
// let u: undefined = undefined;

// let someNumber: number = null;

// function uppercaseFirstLetter(str: string | null) {
//   if (str) {
//     // type guard
//     return str[0].toUpperCase() + str.substr(1);
//   }
// }

// console.log("uppercaseFirstLetter", uppercaseFirstLetter("hello"));

// function calcArea(width: number, height: number): number;
// function calcArea(length: number): number;
// function calcArea(...args: number[]): number {
//   if (args.length === 2) {
//     return args[0] * args[1];
//   }

//   return Math.pow(args[0], 2);
// }

// console.log("calcArea", calcArea(2));

// const flyingRobot = new FlyingRobot("John", 4);
// flyingRobot.askName();
// flyingRobot.move(2);
// flyingRobot.getJetpackSize();
// flyingRobot.name = "KEV";
// flyingRobot.color = "green";
// console.log("flyingRobot.name", flyingRobot.name);

class Person {
  constructor(name: string, protected email: string, private salary: number) {}
}

class Employee extends Person {
  getEmployeeInfo() {
    return `${this.name} ${this.email} ${this.salary}`;
  }
}
const jack = new Employee("jack", "jack@gmail.com", 1000);
console.log(jack.getEmployeeInfo());
