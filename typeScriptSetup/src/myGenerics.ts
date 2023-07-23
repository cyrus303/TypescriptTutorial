const score: number[] = [];
const names: Array<number> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

function identityFive<T>(val: T[]): T {
  // let sac: number[] = [1, 2, 3, 4];
  return val[4];
}

function lessData(val: number): number {
  return 3;
}

const moreData = <T>(val: T[]): T => {
  return val[3];
};

interface dataBase {
  id: number;
  row: number;
  value: string;
}

function multiplePara<T, U extends dataBase>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}

multiplePara(2, {id: 123, row: 1, value: 'sachin'});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
