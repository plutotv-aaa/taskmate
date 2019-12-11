export class Robot {
  _color: string;

  protected _name: string;

  static availableColors = ["green", "yellow"];

  static isColorAvailable(color: string): boolean {
    return Robot.availableColors.includes(color);
  }

  constructor(_name: string) {
    this._name = _name;
  }

  set name(value: string) {
    this._name = value;
  }

  set color(value: string) {
    if (!Robot.isColorAvailable(value)) {
      throw new Error(`Color ${value} is not available`);
    }
    this._color = value;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  askName() {
    console.log(`My name is ${this._name}`);
  }

  move(distance: number) {
    console.log(`${this._name} moved ${distance} meters`);
  }
}

export class FlyingRobot extends Robot {
  private readonly jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is FLYING`);
    super.move(distance);
  }

  getJetpackSize() {
    return this.jetpackSize;
  }
}
