// Boolean
let b: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = "Hello";
const world: string = "World";
const helloworld = `
    ${2 + 2}
    ${world}
`;

// Null and undefined
let n: null = null;
let u: undefined = undefined;

// let someNumber: number = null; // null is not assignable to a number

function uppercaseFirstLetter(str: string | null) {
  if (str) {
    // type guard
    return str[0].toUpperCase() + str.substr(1);
  }
}

console.log("uppercaseFirstLetter", uppercaseFirstLetter("hello"));

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObject: object = new Map();
const myObject1: object = [];
const myObject2: object = {};
const myObject3: object = new Set();

// const myObj: object = 1 // Typescript will error

// Void - Describes the absence of a value - Used for a return type for the functions that don't return a value
function log(message: string): void {
  console.log(message);
}

// Array

/**
 * There are a few ways to declare an array.
 * We can write the type of the elements followed by the square brackets or
 * we can use a generic array type with the type of the array elements as a generic parameter.
 * And in here, array 2 is equal to array 1, because their types are exactly the same.
 *
 */
let array1: string[] = ["x", "y"];
let array2: Array<string> = array1;

// Tuple

/**
 *  Tuple.
 * It represents an array with fixed number of elements
 * where the type of each element is known.
 */
let tuple: [string, number] = ["str", 1];

/**
 * Enum
 * Is a way of giving more friendly names to a set of values.
 * We need them to represent a set of choices.
 * We have a color enum with 3 members: Red, Green and Blue.
 * Enum assigns a number to each member in sequence starting from 0
 */
enum Color {
  Red,
  Green,
  Blue = "blue",
}

let myFavColor: Color = Color.Blue;

console.log(Color[0], Color[1], Color.Blue);

/**
 * Any.
 * Sometimes we want to describe a variable that we don't know.
 *
 * The content of this variable may come from a user,
 * a third-party library, or it can be some dynamic content that
 * we can't guess the type of.
 *
 * In here we define a variable and set its type to any
 * And this means that we can assign anything  * we like to this variable: a string, a number, a boolean, or anything else.
 */

let ANY: any;
ANY = "a string";
ANY = 1;
ANY = true;

/**
 * Type Assertions
 *
 * Like a type class in other languages
 *
 * Type assertion is like a type cast in other languages.
 *
 * It's a way of telling TypeScript that you know more about a type of some value than TypeScript does usually we would use type assertions
 * when we know that there is a more specific type for a value than
 *
 * TypeScript has already derived.
 *
 *
 */
const email = document.getElementById("email");

if (email) {
  email.addEventListener("change", e => {
    const input = e.currentTarget as HTMLInputElement;
    // const input = <HTMLInputElement>e.currentTarget; // Will not work in JSX
    console.log(input.value);
  });
}
