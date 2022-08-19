Promise.all = (promises) => {
    let responses = [];
    let errorRes = [];

    return new Promise((resolve, reject) => {

        // Loop each promise
        promises.forEach(async(singlePromise, i) => {


            try {
                let res = await singlePromise;
                responses.push(res);

                // handle last promise
                if(i === promises.length - 1) {
                    if(errorRes.length > 0) {
                        reject(errorRes);
                    } else {
                        // all promises are resolved, so return 
                        resolve('Custom promise resolve ', responses);
                    }
                }
            } catch(err) {
                errorRes.push(err);
                reject(err);
            } 
        })


    })

}

const p1 = Promise.resolve('Promise 1 resolved');
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 after 2 secs');
    }, 2000);
})


// how to call
Promise.all([p1, p2]).then((res) => {
        console.log('All success')
    }, (err) => {
        console.log('Atleast one error', err);
    }
)