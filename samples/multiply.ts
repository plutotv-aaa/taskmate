
export interface MultipleWorld {}

export default function multiply(a: number, b: number): number {
  return a * b;
}

export function multiplyByTwo(num: number) {
    return multiply(num, 2);
}
