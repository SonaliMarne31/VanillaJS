const list =  [
    ['dog', 'mammal'],
    ["shark", "fish"],
    ["cat", "mammal"],
    ["mammal", "animal"],
    ['fish', 'animal']
];

function buildJSON(list) {

   let result = {}
   for([child, parent] of list) {
        if(!Object.keys(result).includes(parent)) {
            result[parent] = {};
        }

        if(!(child in result)) {
            result[parent][child] = {};
        } else {
            result[parent][child] = result[child];
            delete result[child];
        }
   }

   return result;

}


let res = buildJSON(list);
console.log(JSON.stringify(res));
