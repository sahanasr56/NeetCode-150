/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    
    isSubtree(root, subRoot) {
        if(!root)return false
        if(this.checkSame(root,subRoot))return true
        return this.isSubtree(root.left,subRoot)|| this.isSubtree(root.right,subRoot)
    }

    checkSame(s,t){
        if(!s&&!t)return true
        if(!s || !t ||s.val!==t.val)return false
        return this.checkSame(s.left,t.left)&& this.checkSame(s.right,t.right)
    }
    
}
