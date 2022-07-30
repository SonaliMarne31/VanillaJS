/* Given an object and a string path, write a method getValue to get the value at given path.

Example:

const obj = { 'x': [{ 'y': { 'z': 100 } }] };

getValue(obj, 'x[0].y.z'); // 100 */

function getPath(path) {
   // If the path isn't a string, return it
		if (typeof path !== 'string') return path;

		// Create new array
		var output = [];

		// Split to an array with dot notation
		path.split('.').forEach(function (item, index) {

			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key) {

				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}

			});

		});

		return output;
}

function getValue(obj, path) {
    let curr = obj;
    for(let i=0; i< path.length; i++) {
        if(curr[path[i]]) {
            curr = curr[path[i]];
        } else {
            return undefined;
        }
    }
    console.log(curr);
}


const obj = { 'x': [{ 'y': { 'z': 100 } }, { 'a': { 'b' : 300 }}]};
const path = getPath('x[0].y.z'); 
console.log(path);


let value = getValue(obj, path);
console.log(value)

const path1 = getPath('x[1].c.b'); 
console.log(path1);


let value1 = getValue(obj, path1);
console.log(value1)