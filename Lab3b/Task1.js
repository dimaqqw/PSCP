function firstJob(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}

firstJob()
.then((result) => {
    console.log('Result of promise: ', result);
})
.catch((error) => {
    console.log('Error: ', error);
});


(async () => {
    try {
        const result = await firstJob();
        console.log('Result of promise: ', result);
    } catch (error) {
        console.log('Error: ', error);
    }
})()