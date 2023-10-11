function secondJob(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Bad connection");
        }, 3000);
    });
}

secondJob()
.then((result) => {
    console.log('Result of promise: ', result);
})
.catch((error) => {
    console.log('Error: ', error);
});


(async () => {
    try {
        const result = await secondJob();
        console.log('Result of promise: ', result);
    } catch (error) {
        console.log('Error: ', error);
    }
})()