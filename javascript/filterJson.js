
/**
 * Output

    { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
 */


const obj = {
    "a": 1,
    "b": {
       "c": 2,
       "d": -3,
       "e": {
            "f": {
                "g": -4
            }
       },
       "h": {
            "i": 5,
            "j": 6
       }
    }
}
const filter = (n) => n >= 0

const deepFilter = (input, filter) => {
	for(let key in input) {
		let value = input[key];
		if(typeof value === 'object') {
			deepFilter(value, filter);
		}
		else if(filter(value) === false) {
			delete input[key];
		}

		if( JSON.stringify(value) === '{}' )
			delete input[key];
	}
	return input
}

let output = deepFilter(obj, filter);
console.log(output);
