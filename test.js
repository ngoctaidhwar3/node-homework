const calculator = require('./math');

var x = 50, y = 10; 
    
console.log(`Addition of ${x} and ${y} is `
                   + calculator.add(x, y)); 
    
console.log(`Subtraction of ${x} and ${y} is `
                   + calculator.sub(x, y)); 
    
console.log(`Multiplication of ${x} and ${y} is `
                   + calculator.mult(x, y)); 
    
console.log(`Division of ${x} and ${y} is `
                    + calculator.div(x, y)); 