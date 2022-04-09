function br(i, n, arr, op, cl) {
  if (n % 2 !== 0) {
    console.log('Not possible to make balanced brackets');
    return;
  }

  if (op < Math.floor(n / 2)) {
    arr[i] = '(';
    br(i + 1, n, arr, op + 1, cl);
    if (arr.length == n) {
      console.log(arr);
      return;
    }
    br(i - 1, n, arr, op - 1, cl);
  } else {
    if (cl < Math.floor(n / 2)) {
      arr[i] = ')';
      br(i + 1, n, arr, op, cl + 1);
      if (arr.length == n) {
        console.log(arr);
        return;
      }
    } else br(i - 1, n, arr, op, cl - 1);
  }
}

br(0, 4, [], 0, 0);
