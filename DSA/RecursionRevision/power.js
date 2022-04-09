let [a, n] = [2, 1000];
let obj = {};

function power(a, n) {
  if (n == 0) {
    return 1;
  }
  obj.n = power(a, Math.floor(n / 2));
  if (n % 2 == 0) {
    return obj.n * obj.n;
  } else {
    return obj.n * obj.n * a;
  }
}
function power(a, n) {
  if (n == 0) {
    return 1;
  }
//   obj.n = power(a, Math.floor(n / 2));
  if (n % 2 == 0) {
    return power(a, Math.floor(n / 2)) * power(a, Math.floor(n / 2));
  } else {
    return power(a, Math.floor(n / 2)) * power(a, Math.floor(n / 2)) * a;
  }
}
console.log(obj);
console.log(power(a, n));
