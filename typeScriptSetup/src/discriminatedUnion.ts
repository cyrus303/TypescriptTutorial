interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

function checkShape(shape: Circle | Square | Rectangle) {
  if (shape.kind === 'circle') {
    console.log('is a circle');
  } else if (shape.kind === 'square') {
    console.log('is a square');
  }
  if (shape.kind === 'rectangle') {
    console.log('is a rectangle');
  }
}
