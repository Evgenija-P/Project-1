function printPoint(point: { x: string; y: string }): void {
  console.log(`Cool, the poin is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: '1',
  y: '2',
};

printPoint(obj1);

const obj2 = {
  x: '1',
  y: '2',
  z: '3',
};

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(`Hello`, user.firstName.toLocaleUpperCase());

  if (user.lastName) {
    console.log(`Hello`, user.lastName.toLocaleUpperCase());
  }
}

printName({ firstName: 'Bobby' });
printName({ firstName: 'Garry', lastName: 'Rey' });
