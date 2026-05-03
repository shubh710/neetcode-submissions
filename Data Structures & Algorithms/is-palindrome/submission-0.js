class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
        let i = 0, j = s.length -1;
        while(i < j){
            if(s[i] !== s[j]){
                return false
            }
            i++;
            j--;
        }
        return true
    }
}
