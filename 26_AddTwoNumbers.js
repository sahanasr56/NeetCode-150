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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy=new ListNode(0)
        let current=dummy
        let carry=0

        while(l1!==null||l2!==null||carry!==0){
        let sum=0
            if(l1!==null){
                sum+=l1.val
                l1=l1.next
            }
            if(l2!==null){
                sum+=l2.val
                l2=l2.next
            }
            sum+=carry
            carry=Math.floor(sum/10)
            current.next=new ListNode(sum%10)
            current=current.next
        }
        return dummy.next
    }
}
