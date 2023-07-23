const arrayList = [
  {
    id: 1,
    name: 'kishan',
    phoneNumber: 112341,
  },
  {
    id: 2,
    name: 'srinidhi',
    phoneNumber: 112341,
  },
  {
    id: 3,
    name: 'Phoebe Marsh',
    phoneNumber: 123123,
  },
  {
    id: 4,
    name: 'Isaiah Willis',
    phoneNumber: 123123,
  },
  {
    id: 5,
    name: 'elvin Barker',
    phoneNumber: 123123,
  },
  {
    id: 6,
    name: 'Rosa Adams',
    phoneNumber: 123123,
  },
];

index = arrayList.findIndex((element) => element.id === 5);

console.log(arrayList[index]);
