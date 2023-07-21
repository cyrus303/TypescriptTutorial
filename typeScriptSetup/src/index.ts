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
  private city: string = 'Dublin';
  _courseCount = 1;

  constructor(
    public email: string,
    public name: string,
    private phone: number
  ) {}

  get cityPincode(): number {
    if ((this.city = 'Dublin')) {
      return 560056;
    }
    return 560060;
  }

  set validEmail(email: string) {
    if (this.email.length <= 3) {
      throw new Error('email invalid');
    }
    this.email = email;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  _courseCount = 4;
}

const Sachin = new User('s@s.com', 'sachin', 123);
// console.log(Sachin.city);
