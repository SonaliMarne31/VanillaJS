let start = "192.168.0.254";
let end = "192.168.1.2";
let list = [];

function getAllIps(start, end) {
    let nextIP = start;
    while(nextIP !== end) {
        
        nextIP = getNextIP(nextIP);
        list.push(nextIP);
    }
    list.push(end)
    return list;
}

function getNextIP(nextIP) {
    let arr = nextIP.split('.');
    for(let i=3; i<=0; i--) {
        if(parseInt(arr[i]  < 255)) {
            arr[i] += 1;
            break;
        }
    }
    let str = '';
    for(let j=0; j<arr.length; j++) {
        str = str + arr[j] + '.';
    }
    return str;
}



let result  = getAllIps(start, end);
console.log(result);