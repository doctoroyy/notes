#include<iostream>
#include<ctime>
// #include<stdlib>
using namespace std;
const int maxn = 1e6;
int find(int a[], int n) {
  int num = 0;
  for (int i = 0; i < n; i++) {
    num = num ^ a[i];
  }
  return num;
}

int main() {
  int a[] = {1,2,3,4,5,4,-4,3,2,5,1};
  cout << find(a, 11) << endl;
  return 0;
}