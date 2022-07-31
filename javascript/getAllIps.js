let start = "192.168.0.254";
let end = "192.168.1.2";
let arr = [];

function getAllIps(start, end) {
    arr.push(start);

    let splirArr = start.split('.');

    while(start < end) {
        let add = 1;

        for(let i = splirArr.length; i>=0 ; i--) {
            let p = parseInt(splirArr[i]);
            
        }

    }



}



let result  = getAllIps(start, end);
console.log(result);