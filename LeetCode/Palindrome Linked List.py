# 풀이 1. 데크를 이용한 최적화

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        # 데크 자료형 선언 
        q: Deque = collections.deque()
            
        if not head:
            return True
        
        node = head
        
        while node is not None:
            q.append(node.val)
            node = node.next
            
        # 팰린드롬 판별
        while len(q) > 1:
            if q.popleft() != q.pop():
                return False
        
        return True



# 풀이 2. 러너를 이용한 풀이

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        rev = None
        # 초깃값은 모두 head에서 시작
        slow = fast = head
        # print('slow', slow) ListNode{val: 1, next: ListNode{val: 2, next: ListNode{val: 2, next: ListNode{val: 1, next: None}}}}
        
        # 러너를 이용해 역순 연결 리스트 구성
        while fast and fast.next:
            # 빠른 러너는 두 칸씩, 느린 러너는 한 칸씩 이동
            fast = fast.next.next
            # rev에 현재 slow, rev.next에 이전 rev를 넣어 역순 만듦, slow는 정방향으로 진행
            rev, rev.next, slow = slow, rev, slow.next
            
        if fast:
            slow = slow.next
        
        # 팰린드롬 여부 확인
        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next
        return not rev
