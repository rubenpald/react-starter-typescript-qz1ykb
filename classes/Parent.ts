abstract class Parent {
  constructor() {
    this.greeting();
  }

  abstract hello(): string;

  greeting() {
    this.hello();
  }
}

export default Parent;
