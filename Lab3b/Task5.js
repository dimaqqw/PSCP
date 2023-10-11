function square(number) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 2));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
    });
}

function cube(number) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 3));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
    });
}

function fourthPower(number) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(number)) {
            resolve(Math.pow(number, 4));
        } else {
            reject(new Error('Ошибка: входное значение не является числом'));
        }
    });
}

const inputNumber = 3;


Promise.all([square(inputNumber), cube(inputNumber), fourthPower(inputNumber)])
  .then((results) => {
    console.log('Результаты:', results);
  })
  .catch((error) => {
    console.error('Ошибка:', error.message);
  });