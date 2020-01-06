// We use the union type to describe a value that can be one of several types.

// Type Guarding
function someFn(mArg: number | string | boolean) {
  if (typeof mArg === "string") {
    let x = mArg.toUpperCase();
  } else if (typeof mArg === "number") {
    mArg.toFixed();
  } else {
    mArg;
  }
}

// Us

interface IDog {
  bark(): void;
  walk(): void;
}
interface ICat {
  meow(): void;
  walk(): void;
}

// Custom Type Guard
function isDog(pet: IDog | ICat): pet is IDog {
  return (<IDog>pet).bark !== undefined;
}
function isCat() {}

function callMyPet(pet: IDog | ICat) {
  // 🔴 Don't do this. Using assertions in this case is ugly
  if ((<IDog>pet).bark) {
    (<IDog>pet).bark();
  } else {
    (<ICat>pet).meow();
  }
}

function callPet(pet: IDog | ICat) {
  // ✅ Using custom type guard
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}
