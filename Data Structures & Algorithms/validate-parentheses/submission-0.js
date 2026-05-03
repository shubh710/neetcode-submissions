   const map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
class Solution {
 
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for(let i = 0; i <s.length; i++){
            if(Object.keys(map).includes(s[i])){
                stack.push(s[i])
            }
            if(Object.values(map).includes(s[i])){
                const cur = stack.pop();
                if(map[cur] !== s[i]) return false
            }
        }
        console.log(stack)
        return stack.length === 0
    }
}
