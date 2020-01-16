#include <iostream>
using namespace std;
const int maxn = 1e3;
int a[maxn][maxn];

int main() {
  int n, m;

  cin >> n >> m;

  while (m--) {
    int k;
    cin >> k;
    int p[maxn];
    for (int i = 0; i < k; i++) {
      cin >> p[i];
    }
    for (int i = 0; i < k; i++) {
      for (int j = i + 1; j < k; j++) {
        a[abs(p[i])][abs(p[j])]++;
      }
    }

  }
  int a, b;
  cin >> a >> b;
  
  return 0;
}