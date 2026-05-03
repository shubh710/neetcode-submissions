class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ``;
        for(let i = 0; i < strs.length; i++){
            encoded = `${encoded}${strs[i].length}#${strs[i]}`
        }
        console.log(encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i = 0;
        let start = 0;
        const ans = [];
        while(i < str.length){
            if(str[i] === '#'){
                const len = parseInt(str.slice(start, i));
                const word = str.slice(i+1, i+1+len);
                ans.push(word);
                console.log(len, word, str);
                i += 1 + len;
                start = i;
                continue;
            }
            i++;
        }
        return ans;
    }
}
