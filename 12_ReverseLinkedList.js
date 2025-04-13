/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let prev=null;
       let current=head;
       while(current){
        let nextNode=current.next;
        current.next=prev;
        prev=current;
        current=nextNode;
       }
       return prev
    }
}
