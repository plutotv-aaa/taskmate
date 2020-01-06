// Interfaces

interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = { name: "John" };

// profile.name = "Jim"; // Wont work since readonly is set on name

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
  //   [key: string]: number; // Won't work
}

const a: A = { someProp: "some prop" };
a.x = 1;
a.y = 2;

// Call Signature

interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = "some prop";

console.log(sum);

// Extending Interfaces

interface Parent {
  x: string;
}
interface Parent1 {
  y: string;
}
interface Parent2 {
  z: string;
}
interface Child extends Parent, Parent1, Parent2 {}

let child: Child = { x: "x prop", y: "y prop", z: "z prop" };
