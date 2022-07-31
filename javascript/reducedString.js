// Input: "hello world"
// Output: "lohe wrd"
// Explaination: 'l' appears thrice, 'o' appears twice, 'h','e', ' '(space) ,'w','r','d' 
// all appear once 'h','e',' ','w','r','d' should be appended in the same order as 
// they appear in the original string  hello world 

let map = new Map();

function reducedString(str) {
    for(let c of str) {
        if(!map.has(c)) {
            map.set(c, 1);
        } else {
            map.set(c, map.get(c)+1);
        }
    }
    const mapSorted = [...map.entries()].sort((a,b) => b[1] - a[1]);

    let result = '';
    for(entry of mapSorted) {
        result += entry[0];
    }

    return result;

}

let str = reducedString("hello world");
console.log(str);