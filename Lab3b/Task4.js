const { v4: uuidv4 } = require('uuid');

const inputCardNumber = '1111-2222-3333-4444'

function validateCard(cardNumber){
    console.log('Card number: ',cardNumber);
    return Math.random() < 0.5;
}

function createOrder(number){
    return new Promise((resolve, reject) => {
        if (validateCard(number)) {
            const orderId = uuidv4();
            setTimeout(() => {
                resolve(orderId);
            }, 5000)
        } else {
            reject(new Error('Card is not valid'))
        }
    })
}

function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        console.log('Order ID:', orderId);
        const paymentSuccess = Math.random() < 0.5;
        if (paymentSuccess) {
          resolve('Payment successful');
        } else {
          reject(new Error('Payment failed'));
        }
      });
}

createOrder(inputCardNumber)
.then((orderId) => {
  return proceedToPayment(orderId);
})
.then((paymentResult) => {
  console.log('Result:', paymentResult);
})
.catch((error) => {
  console.error('Error:', error.message);
});

// (async () => {
//     try {
//         const orderId = await createOrder('5555-6666-7777-8888');
//         const paymentResult = await proceedToPayment(orderId);
//         console.log('Result:', paymentResult);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// })();