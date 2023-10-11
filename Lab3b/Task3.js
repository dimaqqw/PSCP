function thirdJob(data){
    return new Promise((resolve,reject) => {
        if (!Number.isInteger(data)) {
            reject('error');
        }
        else if(data % 2 == 1){
            setTimeout(() => {
                resolve('odd');
            },1000)
        }
        else{
            setTimeout(() => {
                reject('even')
            },2000)
        }
    })
}

const value = 0;

thirdJob(value)
.then((result) => {
    console.log(`thirdJob(${value}): ${result} resolve`);
})
.catch((error) => {
    console.log(`thirdJob(${value}): ${error} reject`);
});

(async () => {
    try {
        const result = await thirdJob(value);
        console.log(`thirdJob(${value}): ${result} resolve`);
    } catch (error) {
        console.log(`thirdJob(${value}): ${error} reject`);
    }
})()