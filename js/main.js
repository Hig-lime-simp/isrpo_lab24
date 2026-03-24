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

const product = {
    name: "test",
    price: 0,
    category: "test",
    inStock: false
}
// const {name,price,category,inStock} = product
function printProduct({name,price,category,inStock}){
    console.log("==== Мой продукт ====")
    console.log(name);
    console.log(price);
    console.log(category);
    console.log(inStock);
    console.log("==== Конец ====")
}
printProduct(product)
