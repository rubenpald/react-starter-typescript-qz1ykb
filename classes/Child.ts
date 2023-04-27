import Parent from './Parent';

class Child extends Parent {
  hello(): string {
    return 'hello';
  }
  /*
  hello = () => {
    console.log('hello there');
    return 'hello';
  };
  */
}

export default Child;
