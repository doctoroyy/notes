let dp = new Array(41).fill(0);
dp[0] = 0, dp[1] = 1, dp[2] = 1;


function Fibonacci(n) {
  if (n == 0) return 0;
  if (dp[n] != 0) return dp[n];
  return dp[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(40));
console.log(dp)