let score: boolean | string | number;
score = true;
score = 12;
score = '55';

type user = {
  id: number;
  name: string;
};

type admin = {
  id: number;
  userName: string;
};

let sachin: user | admin = {name: 'sachin', id: 123};
sachin = {id: 123, userName: 'mahesh_s'};

function DatabaseID(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

let data: number[] = [1, 2, 3, '4'];
let data2: string[] = ['1', '2', '3', 4];

const data3: number[] | string[] = [1, 2, 3, '4'];

const data4: (number | string)[] = [1, 2, 3, '4'];
