/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的末尾。
 * 输入一个递增排序数组的一个旋转，输出旋转数组的最小元素。
 * 例如: {3, 4, 5, 1, 2} 是 {1, 2, 3, 4, 5} 的一个旋转; 该数组的最小值为1
 */
#include<iostream>
using namespace std;

int findMinOfArr(int arr[], int len) {
  int index1 = 0, index2 = len - 1;
  int mid;
  while (arr[index1] >= arr[index2]) {
    if (index2 - index1 == 1) {
      break;
    }
    mid = (index1 + index2) / 2;
    if (arr[mid] >= arr[index1]) {
      index1 = mid;
    } else if (arr[mid] <= arr[index2]) {
      index2 = mid;
    }
    // cout << "*\n";
  }
  return arr[index2];
}
int main() {
  int arr[] = {4, 5, 1, 2, 3};
  cout << findMinOfArr(arr, 5) << endl;
  return 0;
}


