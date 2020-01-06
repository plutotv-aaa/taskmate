// NOTE: We can't use Generic Types anywhere with the static side
// NOTE: We can use interfaces to describe Generic functions

// // Generic Functions
// function genericFunction<T>(x: T): T {
//   return x;
// }

// const genericArrowFunction = <T>(x: T): T => x;

// // Generic Interfaces
// interface IGeneric<T> {
//   (a: T): T;
//   someProp: T;
// }

// interface IGeneric<T> {
//   <U>(a: U): U;
//   someProp: T;
// }

// // Generic Classes
// class GenericClass<P> {
//   constructor(public props: P) {}
//   getProps(): P {
//     return this.props;
//   }
// }

interface Expirable {
  expiryDate: Date;
}

interface CakeChocolate extends Expirable {}
interface CakeVanilla extends Expirable {}

const ChocolateCakes: CakeChocolate[] = [{ expiryDate: new Date() }];
const vanillaCakes: CakeVanilla[] = [{ expiryDate: new Date() }];

const getExpiryItems = <Item extends Expirable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate);
};

const expChocolateCakes: CakeChocolate[] = getExpiryItems<CakeChocolate>(ChocolateCakes);
const expVanillaCakes: CakeVanilla[] = getExpiryItems<CakeVanilla>(
  vanillaCakes
);
