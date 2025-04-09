class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let onlyAlpha= s.replace(/[^a-zA-Z0-9]/g,"");
        let rev=onlyAlpha.split('').reverse().join('');
        return onlyAlpha.toLowerCase()==rev.toLowerCase()?true:false
    }
}
