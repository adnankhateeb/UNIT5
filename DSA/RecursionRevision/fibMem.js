let n = 21;
let arr = new Array(n + 1).fill(-1);

const fib = (n) => {
   if (n == 0 || n == 1) {
      arr[n] = n;
      return arr[n];
   }

   if (arr[n] == -1) {
      return arr[n] = fib(n - 1) + fib(n - 2);
   }
   return arr[n];
};
console.log(fib(n));
console.log(arr);
