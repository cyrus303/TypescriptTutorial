function addTwo(num: number): number {
  return num + 2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

addTwo(5);
getUpper('hello');
signUp('sac', 'sac', 'sac', true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser('s', 's@s.com');

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

