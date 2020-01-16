class Solution {
  public:
    int replaceSpace(char *str, int len) {
      int numOfSpace = 0, p1, p2;
      for (int i = 0; i < len; i++) {
        if (str[i] == ' ') numOfSpace++;
      }
      int newLen = len + numOfSpace * 2, p1 = len, p2 = newLen;
      while (p1 != p2) {
        while (str[p1] != ' ') {
          str[p2--] = str[p1--];
        }
        str[p2--] = '%';
        str[p2--] = '0';
        str[p2--] = '2';
        str[p1--];
      }
    }
};
