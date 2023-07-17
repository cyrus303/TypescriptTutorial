interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  startTrial(): string;
  getDiscount: (discountType: string) => number;
}

const sachin: User = {
  dbId: 123,
  email: 's@s.com',
  userId: 456,
  startTrial() {
    return 'true';
  },
  getDiscount: (discountType = 'student') => {
    return '10';
  },
};
