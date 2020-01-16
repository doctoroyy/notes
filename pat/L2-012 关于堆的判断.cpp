#include <iostream>
#include <map>
#include <cmath>
using namespace std;
const int maxn = 1e3 + 10;
int a[maxn];

void heapify(int a[], int index) {
  while (index) {
    if (a[index] < a[(index - 1) / 2]) {
      swap(a[index], a[(index - 1) / 2]);
      index = (index - 1) / 2;
    } else {
      break;
    }
  }
}

int main() {
  int n, m;
  cin >> n >> m;
  for (int i = 0; i < n; i++) {
    cin >> a[i];
    heapify(a, i);
  }
  map<int, int> num2Index;

  for (int i = 0; i < n; i++) {
    num2Index[a[i]] = i;
  }
  cin.get();
  for (int i = 0; i < m; i++) {
    string str;
    getline(cin, str);
    int pos;
    if (str.find(" is the root") != string::npos) {
      pos = str.find(" is the root");
      int num = stoi(str.substr(0, pos));
      if (a[0] == num) {
        cout << 'T';
      } else {
        cout << 'F';
      }
    } else if (str.find(" are siblings") != string::npos) {
      pos = str.find(" are siblings");
      str = str.substr(0, pos);
      pos = str.find(" and ");
      int a = stoi(str.substr(0, pos));
      int b = stoi(str.substr(pos + string(" and ").size() - 1));
      if ((num2Index[a] - 1) / 2 == (num2Index[b] - 1) / 2) {
        cout << 'T';
      } else {
        cout << 'F';
      }
    } else if (str.find(" is the parent of ") != string::npos) {
      pos = str.find(" is the parent of ");
      int a = stoi(str.substr(0, pos));
      int b = stoi(str.substr(pos + string(" is the parent of ").size() - 1));
      if ((num2Index[b] - 1) / 2 == num2Index[a]) {
        cout << 'T';
      } else {
        cout << 'F';
      }
    } else {
      pos = str.find(" is a child of ");
      int a = stoi(str.substr(0, pos));
      int b = stoi(str.substr(pos + string(" is a child of ").size() - 1));
      if ((num2Index[a] - 1) / 2 == num2Index[b]) {
        cout << 'T';
      } else {
        cout << 'F';
      }
    }
    if (i < m - 1) cout << endl;
  }
}