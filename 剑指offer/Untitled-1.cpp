#include<iostream>
using namespace std;
int Fibonacci(int n) {
  int f1 = 0, f2 = 1;
  if (n < 2) return n;
  for (int i = 2; i <= n; i++) {
    int tmp = f1;
    f1 = f2;
    f2 = f1 + tmp;
  }
  return f2;
}
double Power(double base, int exponent) {
  double res = 1;
  int flag = exponent > 0 ? 0 : 1;
  exponent = abs(exponent);
  while (exponent) {
    if (exponent & 1) res = res * base;
    base *= base;
    exponent >>= 1;
  }
  if (flag) return 1 / res;
  return res;
}
int f() {
  int res = 1;
  while (res) {
    res <<= 1;
    cout << res << endl;
  }
  return res;
}
int main() {
  // for (int i = 0; i <= 10; i++) cout << Fibonacci(i) << endl;
  // cout << Power(3, -4) << endl;
  cout << f() << endl;
}