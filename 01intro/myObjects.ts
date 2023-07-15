const user = {
  name: 'Edith Martin',
  email: 'jokzi@enju.zm',
  isActive: true,
};

function createUser({name: string, isPaid: number}) {}

let newUser = {
  name: 'sachin',
  isPaid: false,
  email: 'sipeivu@kurep.tl',
};

createUser(newUser);

function createCourse(): {name: string; price: boolean} {
  return {name: 'madhu', price: 500};
}

function checkout({
  name,
  price,
  email,
  isPaid,
}: {
  name: string;
  price: number;
  email: string;
  isPaid: boolean;
}): void {
  // Function body
}

checkout({
  name: 'sachin',
  price: 100,
  email: 'sac@gmail.com',
  isPaid: true,
});

export {};
