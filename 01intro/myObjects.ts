const user = {
  name: 'Edith Martin',
  email: 'jokzi@enju.zm',
  isActive: true,
};

function createUser({name: string, isPaid: boolean}) {}

let newUser = {
  name: 'sachin',
  isPaid: false,
  email: 'sipeivu@kurep.tl',
};

createUser(newUser);

function createCourse(): {name: string; price: number} {
  return {name: 'madhu', price: 500};
}

function checkout({
  name: string,
  price: number,
  email: string,
  isPaid: boolean,
}) {}

checkout({
  name: 'sachin',
  price: 100,
  email: 'sac@gmail.com',
  isPaid: true,
});

export {};
