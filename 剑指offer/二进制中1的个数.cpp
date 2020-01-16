
//可能引起死循环的解法
class Solution {
  public:
    int numOfOne(int n) {
      int cnt = 0;
      while (n) {
        if (n & 1) cnt++;
        n >>= 1;
      }
      return cnt;
    }
};

//一般解法
class Solution {
  public:
    int numOfOne(int n) {
      int cnt = 0, flag = 1;
      while (flag) {
        if (n & flag) cnt++;
        flag <<= 1;
      }
      return cnt;
    }
};

//最好解法
class Solution {
  public:
    int numOfOne(int n) {
      int cnt = 0;
      while (n) {
        cnt++;
        n = n & (n - 1);
      }
      return cnt;
    }
};