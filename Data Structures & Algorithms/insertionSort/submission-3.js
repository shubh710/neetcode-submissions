/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(!pairs.length) return []
        const state = [pairs];
        for(let i = 1; i < pairs.length; i++){
            const newPairs = [...state[i-1]];
            const item = newPairs[i];
            // console.log(item);

            let j = i - 1;
            let swap = false;
            while(j >= 0){
                if(item['key'] < newPairs[j]['key']){
                    newPairs[j+1] = newPairs[j];
                    swap = true;
                }else{
                    break;
                }
                j--;
            }
            if(swap) newPairs[j+1] = item;
            state.push(newPairs);
        }
        return state
    }
}
