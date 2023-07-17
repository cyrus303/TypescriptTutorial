// const user = {
//   name: 'Edith Martin',
//   email: 'jokzi@enju.zm',
//   isActive: true,
// };

// function createUser({name: string, isPaid: number}) {}

// let newUser = {
//   name: 'sachin',
//   isPaid: false,
//   email: 'sipeivu@kurep.tl',
// };

// createUser(newUser);

// function createCourse(): {name: string; price: boolean} {
//   return {name: 'madhu', price: false};
// }

// function checkout({
//   name,
//   price,
//   email,
//   isPaid,
// }: {
//   name: string;
//   price: number;
//   email: string;
//   isPaid: boolean;
// }): void {
//   // Function body
// }

// checkout({
//   name: 'sachin',
//   price: 100,
//   email: 'sac@gmail.com',
//   isPaid: true,
// });

// type User = {
//   readonly _id: String;
//   credCardDetails?: number;
//   name: String;
//   email: String;
//   isActive: Boolean;
// };

// let myUser: User = {
//   _id: '1234',
//   name: 'h',
//   email: 'h@h.com',
//   isActive: false,
// };

// myUser.email = 'a@a.com';
// myUser._id = '1111';

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
