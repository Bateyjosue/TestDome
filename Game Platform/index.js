function calculateFinalSpeed(initialSpeed, inclinations) {
  // Your code goes here
  return inclinations.reduce((acc, curr) => {    
    if (curr >= 0) {
      acc -= curr;
    } else {
      acc += -(curr);
    }
    return acc > 0 ? acc : 0;
  }, initialSpeed)
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));