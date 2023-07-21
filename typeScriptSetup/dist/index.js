"use strict";
// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// class User {
//   email: string;
//   public name: string;
//   private city: string = 'Dublin';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, phone) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.city = 'Dublin';
        this._courseCount = 1;
    }
    get cityPincode() {
        if ((this.city = 'Dublin')) {
            return 560056;
        }
        return 560060;
    }
    set validEmail(email) {
        if (this.email.length <= 3) {
            throw new Error('email invalid');
        }
        this.email = email;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
        this._courseCount = 4;
    }
}
const Sachin = new User('s@s.com', 'sachin', 123);
// console.log(Sachin.city);
