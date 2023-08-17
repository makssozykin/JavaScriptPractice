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

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
// //   if (newArray.length > maxLength) {
// //     newArrayCopy = newArray.slice(0, maxLength);
// //     return newArrayCopy;
// //   }
//   return newArray;
//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// makeArray();


// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     }
//         return newArray;
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// function findLongestWord(string) {
//   // Change code below this line
//     const words = string.split(" ");
//     let num = [];
//     let arrayNum;
//     let maxNum;
//     for (let i = 0; i < words.length; i += 1) {
//         num += [words[i].length];
//         arrayNum = num.split("");
//         maxNum = Math.max(arrayNum);
        
//     }
//     console.log(arrayNum);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// let longestWord = '';
// console.log(longestWord.length);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ // Значення властивості з таким ключем
//     console.log(`${key}: ${book[key]}`);
// }

// function countProps(object) {
//     let propCount = 0;
//   // Change code below this line
//     for (key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += object.hasOwnProperty(key);
//         }
//         }
//     return propCount;
//   // Change code above this line

// }
// countProps({ name: "Mango", age: 2 })

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
//   const prodValue = [];
// function getAllPropValues(propName) {
//   // Change code below this line
//   for (const product of products) {
//     const values = Object.keys(product);
//       for (value of values) {
//         if (value === propName){
//             prodValue.push(value);
//             }
//     }
//   }
//     console.log(prodValue);
//   // Change code above this line
// }


    
// getAllPropValues("name");
// getAllPropValues("price");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(this.potions[i], 1);
//     }
//       else {
//         return `Potion ${potionName} is not in inventory!`;
//     }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const i in this.potions) {
//       if (i.includes(oldName)) {
//         this.potions.splice(i, 1, newName);
//       }
//       else {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//     }
//   },
//   // Change code above this line
// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// const getNamesSortedByFriendCount = users => {
//   const countFr = users.reduce((acc, user) => acc + user.friends.length, 0);
//   const sortCountFr = countFr.sort((a, b) => a - b);
//   const names = sortCountFr.map(user => user.name);
// };


// const getFriends = (users) => {
//   return users.flatMap(user => user.friends)
// };
// console.table(getFriends(users));

// const getTotalFriendCount = users => {
//   const userFriends = users.flatMap(({friends}) => friends)
//   const arr = userFriends.length;
//    return arr;
// };

// const getTotalFriendCount = users => {
//   users.reduce((allFriends, user) => {
//     allFriends.push(...user.friends);
//   return allFriends;
//   }, []);
  
//   const friends = allFriends(users);
//   const getFriendStat = (acc, friend) => {
//     if (!acc.hasOwnProperty(friend)) {
//     acc[friend] = 0;
//   }

//   acc[friend] += 1;

//   return acc;
//   }
//   const countFriends = friends => friends.reduce(getFriendStat, {});
//   const FriendCount = countFriends(friends);
//   return FriendCount;
// };

// console.log(getTotalFriendCount(users))

// const sortByAscendingBalance = users => {
//    return users.sort((a, b) => a.balance - b.balance).map(user => user.name)
// };
// console.table(sortByAscendingBalance(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalPlaytime = players.reduce((acc, player) => {return acc + player.playtime}, 0);
// const totalGamesPlayed = players.reduce((acc, player) => { return acc + player.gamesPlayed}, 0);
// const totalAveragePlaytimePerGame = totalPlaytime / (totalGamesPlayed / players.length);

// console.log(totalPlaytime);
// console.log(totalGamesPlayed);
// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const ratings = books.filter(book => book.rating > MIN_BOOK_RATING);
// const authors = ratings.map(book => book.author)

// const names = authors.sort((a, b) => a.localeCompare(b));

// console.log(ratings);

// Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

//   const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

  // Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log("ERROR" + error));

//   const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));

// const fetchFriends = () => {
//   return fetch("my-api.com/me").then(token => {
//     console.log(token);
//   });
// };

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       console.log(user.id);
//     });
// };

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// const fetchFriends = async () => {
//   const token = await fetch("my-api.com/me");
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Створюємо масив промісів
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUsers();

