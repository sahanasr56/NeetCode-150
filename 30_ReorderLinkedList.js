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
     * @return {void}
     */
    reorderList(head) {
        if(!head && !head.next) return;

        let slow=head, fast=head;
        //Find Middle
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }

        //Reverse second half
        let prev=null, curr=slow.next;
        slow.next=null;
        while(curr){
            let nextNode=curr.next
            curr.next=prev
            prev=curr
            curr=nextNode
        }

        //Merge
        let first=head, second=prev;
        while(second){
            let temp1=first.next
            let temp2=second.next

            first.next=second
            second.next=temp1

            first=temp1
            second=temp2
        }
    }
}

