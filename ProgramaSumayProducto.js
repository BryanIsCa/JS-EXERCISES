// exercise3.js

function sumAndProduct(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let product = numbers.reduce((acc, curr) => acc * curr, 1);
    console.log("The sum is", sum);
    console.log("The product is", product);
  }
  
  sumAndProduct([1, 2, 3, 4]);
  