import { ShoppingCart } from "../simpts/src/lib/shopping-cart";
// NOTE: We can't use Generic Types anywhere with the static side

// class UIComponent<Props> {
//     props: Props;
//     static getInitialProps(): Props {} // 🔴  we cannot use the generic type parameters to describe the static properties and methods
//   }

// // ✅ Generic Functions
// function genericFunction<T>(x: T): T {
//   return x;
// }

// const genericArrowFunction = <T>(x: T): T => x;

// // ✅ Generic Interfaces
// interface IGeneric<T> {
//   (a: T): T;
//   someProp: T;
// }

// interface IGeneric<T> {
//   <U>(a: U): U;
//   someProp: T;
// }

// // ✅ Generic Classes
// class GenericClass<P> {
//   constructor(public props: P) {}
//   getProps(): P {
//     return this.props;
//   }
// }

// // Describe the following function to make it work with an array of items of any type (string[], number[], boolean[], etc)?
function find<T>(arr: T[], testFunc: (item: T) => boolean): T | undefined {
  return;
}

interface ShoppingCart<ItemId, Item> {
  items: Array<Item>;
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined;
}
interface Item {
  id: number;
  price: number;
}
const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find(item => item.id === id);
  },
};

interface Expires {
  expiryDate: Date;
}

interface CakeChocolate extends Expires {}

interface CakeVanilla extends Expires {}

const ChocolateCakes: CakeChocolate[] = [{ expiryDate: new Date() }];

const vanillaCakes: CakeVanilla[] = [{ expiryDate: new Date() }];
interface GetExpiredItemsFunc {
  <Item extends Expires>(items: Array<Item>): Array<Item>;
}

const getExpiryItems: GetExpiredItemsFunc = items => {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate);
};

const expChocolateCakes: CakeChocolate[] = getExpiryItems<CakeChocolate>(
  ChocolateCakes
);

const expVanillaCakes: CakeVanilla[] = getExpiryItems<CakeVanilla>(
  vanillaCakes
);

interface CanFly {
  fly(): void;
}

function launch<Player extends CanFly>(player: Player) {
  player.fly();
}
