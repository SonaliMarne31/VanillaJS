/**
 * Convert object to JSON 
 * { 'a.b.c': 1, d: 1 } TO {"a":{"b":{"c":1}},"d":1}
 * @param {*} obj 
 * @returns 
 */

const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});

const testData = [
    [{ x: 5 }, "a", 1],
    [{}, "b.c", 2],
    [{}, "b.c.d", { e: 3 }],
    [{ 'a.b.c': 1, d: 1 }, "", ""]
];

/**
 * Decodes the path, and we generate object from it
 * @param {Object} source 
 * @param {String} path 
 * @param {Integer or Object} value 
 * @returns 
 */
function deepSetter(source = {}, path, value) {
    // implement
    let splitArr = path.split('.');
    let i = 0;
    let ref = source;
    while (i < splitArr.length - 1) {
      if (ref[splitArr[i]] === undefined) {
        ref[splitArr[i]] = {};
      }
      ref = ref[splitArr[i]];
      i++;
    }
    // set value for the last path part
    ref[splitArr[splitArr.length - 1]] = value;
    return source;
}
console.log('Deep Setter 2222');
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));
console.log(JSON.stringify(unflattenObject({ 'a.b.c': 1, d: 1 })));

/**
 * Convert object to JSON 
 * { 'a.b.c': 1, d: 1 } TO {"a":{"b":{"c":1}},"d":1}
 * @param {*} obj 
 * @returns 
 */

function unflattenObject1(obj) {
  let source = {};
  Object.keys(obj).reduce((acc, key) => {

    if (key.indexOf('.') !== -1) { // seems like we have path to decode
        source = deepSetter({}, key, obj[key]);
    } else { // this is a value, so just append it to teh object
        source[key] = obj[key];
    }
    return source;
  }, {});
  return source;
}



console.log('Reuse DeepSetter');
let json = unflattenObject1({ 'a.b.c': 1, d: 1 });
console.log(json);


console.log('Deep Setter');
console.log(deepSetter(testData[0][0], testData[0][1], testData[0][2]));
console.log(deepSetter(testData[1][0], testData[1][1], testData[1][2]));
console.log(deepSetter(testData[2][0], testData[2][1], testData[2][2]));
console.log(deepSetter(testData[2][0], testData[3][1], testData[3][2]));