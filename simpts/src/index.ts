import { ShoppingCart } from "./lib/shopping-cart";
import { calculateTotalAmount } from "./lib/calculate-total-amount";
import { Order } from './lib/order';

const cart = new ShoppingCart();
const order = new Order();

console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
console.log(`The order's total is ${calculateTotalAmount(order)}`);
