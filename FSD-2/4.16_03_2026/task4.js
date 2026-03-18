e=require('events')
ee=new e()
ee.on('CirclePerimeter', (radius) => {
  
    if (radius < 0) {
        console.log(`Error: Radius must be positive (received: ${radius})`);
    } else {
        const perimeter = 2 * Math.PI * radius;
        console.log(`The perimeter of the circle with radius ${radius} is: ${perimeter.toFixed(2)}`);
    }
});
ee.on('SquarePerimeter', (side) => {
  
    if (side < 0) {
        console.log(`Error: Side must be positive (received: ${side})`);
    } else {
        const perimeter = 4 * side;
        console.log(`The perimeter of the square with side ${side} is: ${perimeter.toFixed(2)}`);
    }
});
ee.emit('CirclePerimeter',-4)
ee.emit('CirclePerimeter',5)
ee.emit('SquarePerimeter',45)
ee.emit('SquarePerimeter',-5)
