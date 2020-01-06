interface Kettle {
  volume: number;
}

interface KettleConstructor {
  new (volume: number): Kettle;
}

class TeaKettle implements Kettle {
  volume: number;
  constructor(volume: number) {
    this.volume = 0;
  }
}

class ElectricKettle implements Kettle {
  volume: number;
  constructor(volume: number) {
    this.volume = 0;
  }
}

export function kettleFactory(KettleClass: KettleConstructor) {
  const kettle = new KettleClass(2);
  return kettle;
}

const teaKettle = kettleFactory(TeaKettle);
const electricKettle = kettleFactory(ElectricKettle);
// A class has 2 sides, instance & static
// Interfaces can only implement only the instance public side of the class. This means that we can only implement the public properties and methods that belong to the instance side of the class
// From the static side we can only describe the constructor
