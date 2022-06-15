let n = 120;

let dp = new Array(n + 1).fill(-1);

const fn = (n, dp) => {
   console.log("hi", dp[n]);
   if (n <= 11) {
      return n;
   }
   if (dp[n] != -1) {
      console.log("-1", dp[n]);
      return dp[n];
   } else {
      return (dp[n] =
         fn(Math.floor(n / 2), dp) +
         fn(Math.floor(n / 3), dp) +
         fn(Math.floor(n / 4), dp));
   }

   //    return dp[n];
};

fn(n, dp);

console.log(dp[60]);
