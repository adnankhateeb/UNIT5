let n = 3.4;

function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fact(n - 1) * n;
}

console.log(fact(n));
