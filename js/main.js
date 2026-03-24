import { greet, add, PI } from "./utils.js";
import * as math from "./math.js"
// // console.log("\n=== Деструктуризация массивов ===");

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor, thirdColor] = colors;
// // console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// // console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// // console.log(c4); 

// console.log("=== Деструктуризация объектов ===");

// const user = {
//     name: "Анна",
//     age: 25,
//     city: "Москва"
// };

// const {
//     name,
//     age,
//     city
// } = user;

// // console.log(name, age, city);

// const { name: fullName, age: years } = user;
// // console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// // console.log(personName, country);

// console.log("=== Деструктуризация в параметрах ===");

// const user = {
//     name: "Анна",
//     age: 25,
//     city: "Москва"
// };

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "test",
//     price: 0,
//     category: "test",
//     inStock: false
// }
// // const {name,price,category,inStock} = product
// function printProduct({name,price,category,inStock}){
//     console.log("==== Мой продукт ====")
//     console.log(name);
//     console.log(price);
//     console.log(category);
//     console.log(inStock);
//     console.log("==== Конец ====")
// }
// printProduct(product)

// console.log("Spread для массивов");

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const combined = [...arr1, ...arr2]
// console.log(combined)

// const copy = [...arr1]
// console.log(copy);

// const extended = [0, ...arr1, 7,8];
// console.log(extended);

// console.log("=== Spread для объектов ===");

// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("=== Rest оператор ===");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));


// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = [...arr1, ...arr2]

// function findMax(...arr){
//          return arr.reduce((max,num) => {
//             if (max < num){
//             return num
//         }
//         return max
//     });
// }

// console.log(findMax(...arr3))

// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

console.log(math.square(4))
console.log(math.cube(3))
console.log(math.E);