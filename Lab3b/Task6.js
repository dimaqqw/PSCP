function square(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 2));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
        }, 250);
    });
}

function cube(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 3));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
        }, 500);
    });
}

function fourthPower(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 4));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
        }, 750);
    });
}

const inputNumber = 3;


Promise.race([square(inputNumber), cube(inputNumber), fourthPower(inputNumber)])
.then((results) => {
    console.log('Результаты:', results);
})
.catch((error) => {
    console.error('Ошибка:', error.message);
});

// Promise.any([square(inputNumber), cube(inputNumber), fourthPower(inputNumber)])
// .then((results) => {
//     console.log('Результаты:', results);
// })
// .catch((error) => {
//     console.error('Ошибка:', error.message);
// });