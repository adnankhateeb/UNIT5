const arr = [1, 2, 3, 4, 5];

function sumfn(arr, sum, i) {
  if (arr.length == i) {
    return sum;
  }
  //   return arr.length
  return sumfn(arr, sum + arr[i], i + 1);
}

console.log(sumfn(arr, 0, 0));
