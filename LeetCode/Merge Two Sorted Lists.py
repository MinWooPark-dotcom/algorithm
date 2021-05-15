class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # print('l1',l1) # l1 ListNode{val: 1, next: ListNode{val: 2, next: ListNode{val: 4, next: None}}}
        # print('l2',l2) # l2 ListNode{val: 1, next: ListNode{val: 3, next: ListNode{val: 4, next: None}}}
        if (not l1) or (l2 and l1.val > l2.val):
            l1, l2 = l2, l1
        if l1:
            l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
