//multiply is a function that act like the * operator without it
function multiply(num1, num2) {
  let multiply_result = 0;

  //if the multiplier is 0
  if (num2 == 0) {
    multiply_result = 0;
  }

  if (num2 > 0) {
    for (let i = 0; i < num2; i++) {
      multiply_result += num1;
    }
  } else {
    //if the multiplier is negative
    for (let i = num2; i < 0; i++) {
      multiply_result -= num1;
    }
  }
  return multiply_result;
}
//divide is a function that do an integer division without using /
function divide(a,b) {
    let res = 0
    if (b == 0) {
        res == 0
    }
    if (b > 0) {
        if (a > 0) {
            while (a - b > 0) {
                res++;
                a -= b;
            }
        } else {
            while (a + b < 0) {
                res--;
                a += b;
            }
        }
    } else {
        if (a > 0) {
          while (a + b > 0) {
            a += b;
            res--;
          }
        } else {
          while (a - b < 0) {
            a -= b;
            res++;
         }
        }
    }
    return res;
}


//modulo is a function that act like th % operator without using it
function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}

// console.log(multiply(2,5));
// console.log(divide(20, 10));
// console.log(modulo(5, 2));