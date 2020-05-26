#include <iostream>
#include<algorithm>

using namespace std;
// bool cmp(int a, int b) {
//   if ((a + b) & 1) {
//     return a & 1;
//   }
//   return 0;
// }

struct ListNode {
	int val;
	struct ListNode *next;
	ListNode(int x) :
			val(x), next(NULL) {
	}
};

int main() {
  ListNode *root = ListNode(1);
  ListNode *p = root;
  p->next = ListNode(2);
  p = p->next;
  p->next = ListNode(3);
  p = p->next;
  p->next = ListNode(4);
  p = p->next;

  p = root;
  while (root) {
    NodeList *p = root;
    cout << p->val << endl;
    p = p->next;
  }
}