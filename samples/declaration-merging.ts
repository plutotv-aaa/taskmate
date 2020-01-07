// Declaration 1
// Declaration 2 => Single Declaration
// Declaration 3

// Interface1 + Interface2 = Merged Interface
// Namespace1 + Namespace1 = Merged namespace
// Modules are augmented (modified)

///////
interface Cart {
  calculateTotal(): number;
}
///////

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    return 1;
  },
};
