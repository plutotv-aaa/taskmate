export interface IOrder {
  calculateTotal(): number;
//   products(): Array<any>;
}

// Takes a class as a parameter 
// The class must have 'calculateTotal' as a method on the class
export function calculateTotalAmount(order: IOrder) {
  let total = order.calculateTotal();

  const discount = total * 0.1;
  total -= discount;

  const tax = total * 0.2;
  total += tax;

  return total;
}
