// const target = 3;
// let sum = 0;
// for (let i = 0; i < target; i+=1) {
//     sum += i;
// }
// console.log(sum);

// const max = 5;
// for (let i = 0; i < max; i += 1) {
//     console.log(i);
//     if (i === max) {
//         console.log("Знайшли число 20, перериваємо виконання циклу");
//         break;
//     }
// }
// console.log("Лог після циклу");

// const number = 10;
// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Непарні і: ", i);
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   }
//   else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(500, 10, 5000);

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[20];

// Change code above this line
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);