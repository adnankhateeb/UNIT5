let x = 10;
let n = 2;
let i = 1;
var sum = 0;

function powerSum(x, n, i) {
   if (sum == x) {
      return 1;
   }
   if (sum > x) {
      return 0;
   }

   sum = i ** n;
   return powerSum(x, n, i + 1);
//    console.log("sum:", sum);
}

console.log(powerSum(x, n, i));
