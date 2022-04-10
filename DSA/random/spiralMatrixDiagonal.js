let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let n = 3;
let top = 0;
let bot = n - 1;
let left = 0;
let right = n - 1;

let mat = new Array(n);
let ind = 0;
let count = 0;
let limit = n * n;
for (let i = 0; i < n; i++) {
   mat[i] = new Array(n);
}
while (limit > count) {
   for (let i = left; i <= right; i++) {
      mat[top][i] = arr[ind];
      ind++;
      count++;
   }
   top++;

   for (let i = top; i <= bot; i++) {
      mat[i][right] = arr[ind];
      ind++;
      count++;
   }
   right--;

   for (let i = right; i >= left; i--) {
      mat[bot][i] = arr[ind];
      ind++;
      count++;
   }
   bot--;

   for (let i = bot; i >= top; i--) {
      mat[i][left] = arr[ind];
      ind++;
      count++;
   }
   left++;
}

let leftSum = 0;
let rightSum = 0;
for (let i = 0; i < mat.length; i++) {
   leftSum += mat[i][i];
   rightSum += mat[i][n - i - 1];
}
console.log("leftSum:", leftSum);
console.log("rightSum:", rightSum);
let totalSum = 0;
totalSum = leftSum + rightSum - mat[Math.floor(n / 2)][Math.floor(n / 2)];
console.log("totalSum:", totalSum)
console.log("mat:", mat);
