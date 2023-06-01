// 4-oy Uyga Vax]zifalargit
// 4.1.1
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// const toStrFun = function(obj) {
//     for (const i in obj) {
//         let toStrObj = obj[i]
//         console.log(`${i}: ${Array.isArray(toStrObj) ? toStrObj.join(', ') :toStrObj}`);
//     }
// }
// toStrFun(me);

// 4.1.2

// const myFun = (n) => {
//     let obj = {}
//     for (let i = 1; i <= n; i++) {
//         obj[i] = i ** 2
//     }
//     return obj
// }

// console.log(myFun(5));

// 4.1.3

// const myFun = (n) => {
//     let obj = {}
//     for (let i = 1; i <= n; i++) {
//         obj[i] = i ** 2
//     }
//     let sum = 0
//     for (let [i, j] of Object.entries(obj)) {
//         sum = sum + i * 1 + j
//     }
//     return sum
// }

// console.log(myFun(5));

// 4.1.4

// const students = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]


// const fun = (arr) => {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i].length
//     }
//     return obj
// }
// console.log(fun(students))

// 4.1.5

// const obj = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 }
// let totolObj = 0

// function allSum(obj) {
//     for (const i in obj) {
//         let num = obj[i]
//         totolObj += num
//     }
// }
// allSum(obj)
// console.log(totolObj);

// 4.1.6

// const testObj = {
//         lastName: 'Ahmadjon',
//         firstName: 'Urazov'
//     }
//     // console.log(Object.keys(testObj));

// const defineObject = (obj) => {
//     for (const i in obj) {
//         if (i === String) {
//             return console.log(true);
//         }
//     }
// }
// defineObject(testObj)

// defineObject(testObj)

// 4.1.7

// const str = "Men Abdulaziz Programmerning guruhlarida o’qiyman."
// const getMinMax = (str) => {
//     let arr = str.split(' ')
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > max.length) {
//             max = arr[i]
//         }
//         if (arr[i].length < min.length) {
//             min = arr[i]
//         }
//     }
//     return {
//         minWord: min,
//         maxWord: max,
//     };
// }; 
// console.log(getMinMax(str));

// 4.1.8

// const obj = {
//     a: false,
//     b: 12,
//     c: true,
//     d: 0,
// };

// const result = (obj) => {
//     for (const i in obj) {
//         if (obj[i] === false) {
//             delete obj[i];
//         }
//         if (obj[i] === 0) {
//             delete obj[i]
//         }

//     }
//     console.log(obj);
// }
// result(obj)

// 4.1.9

// const people = [
//     { name: 'Abdulaziz', age: 23, },
//     { name: 'Erkin', age: 20, },
//     { name: 'Temur', age: 21 },
// ]
// const result = (obj) => {
//     for (const i in obj) {

//         if (obj[0].age <= obj[i].age) {
//             console.log(obj[i].name)
//         }

//     }
// }

// result(people)

// 4.1.10 

// const num = 8456842368542;

// const myFun = (num) => {

//     let strNum = String(num)

//     if (strNum.length === 13) {
//         let birlar = strNum.slice(10, 13)
//         let minglar = strNum.slice(7, 10)
//         let millionlar = strNum.slice(4, 7)
//         let milliardlar = strNum.slice(1, 4)
//         let trilionlar = strNum.slice(0, 1)
//         return allNum = {
//             birlar,
//             minglar,
//             millionlar,
//             milliardlar,
//             trilionlar,
//         }
//     }
//     return allNum
// }
// console.log(myFun(num));

// 4.1.11

// const books = [{
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
// }, {
//     title: "Dunyo ishlari",
//     author: "O`tkir Xoshimov",
//     alreadyRead: true,
// }, {
//     title: "Vaqitning qadri",
//     author: "Abdulfattoh Abu G`udda",
//     alreadyRead: false,
// }]

// const myFun = (arr) => {
//     if (arr.alreadyRead) {
//         arr.alreadyRead = "oqilgan"
//     }
//     return arr
// }
// console.log(myFun(books));

// const myFun = function(arr) {
//     const testRead = arr.map((element) => {
//         if (element.alreadyRead === true) {
//             element.alreadyRead = "oqilgan"
//             return `.${element.author}ning ${element.title} kitobi ${element.alreadyRead} `
//         } else {
//             element.alreadyRead = "oqilmagan"

//             return `.${element.author}ning ${element.title} kitobi ${element.alreadyRead} `
//         }
//     })
//     return testRead
// }
// console.log(myFun(books));

// 4.1.12

// const input = {
//     1: "20",
//     2: "30",
//     3: "20",
//     4: "40",
//     5: "30",
//     6: "50",
//     7: "40",
//     8: "20",
// }

// const myFun = (obj) => {
//     for (const i in obj) {
//         if (obj[i] = 20) {
//             ret
//         }
//     }

// }
// myFun(input);

// 4.1.13

// const obj1 = {
//     a: 3,
//     b: 10,
//     c: 5,
//     d: 7,
// }
// const obj2 = {
//     a: 10,
//     d: 4,
//     e: 6,
//     f: 15,
// }

// const myFun = (obj1, obj2) => {
//     obj3 = {}
//     for (const i in obj1) {
//         for (const l in obj2) {
//             if (i !== l) {
//                 obj1[i], obj2[l]
//             }
//         }
//     }

//     return obj3 = obj1, obj2
// }
// console.log(myFun(obj1, obj2))

// 4.1.14

// const products = [{
//         name: "Product 1",
//         price: 20000,
//         discount: 10,
//         quantity: 5,
//     },
//     {
//         name: "Product 2",
//         price: 10000,
//         discount: 20,
//         quantity: 4,
//     },
//     {
//         name: "Product 3",
//         price: 15000,
//         discount: 8,
//         quantity: 10,
//     },
//     {
//         name: "Product 4",
//         price: 18000,
//         discount: 5,
//         quantity: 6,
//     },
//     {
//         name: "Product 5",
//         price: 5000,
//         discount: 10,
//         quantity: 16,
//     },
// ]
// const myFun = products.map((element) => {

//     let allPrice = element.price * element.quantity / 100 * element.discount
//     return allPrice
// })
// console.log(myFun.reduce((acc, element) => acc + element))

// 4.1.15

// const products = [{
//         name: "Product 1",
//         price: 20000,
//         discount: 10,
//         quantity: 5,
//     },
//     {
//         name: "Product 2",
//         price: 10000,
//         discount: 20,
//         quantity: 4,
//     },
//     {
//         name: "Product 3",
//         price: 15000,
//         discount: 8,
//         quantity: 10,
//     },
//     {
//         name: "Product 4",
//         price: 18000,
//         discount: 5,
//         quantity: 6,
//     },
//     {
//         name: "Product 5",
//         price: 5000,
//         discount: 10,
//         quantity: 16,
//     },
// ]
// const myFun = products.map((element) => {
//     let allPrice = element.price * element.quantity / 100 * element.discount
//     return allPrice
// })
// const minMax = (arr) => {
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         if (el > min) {
//             min = el
//         }
//         if (el < max) {
//             max = el
//         }
//     }
//     return {
//         minPrice: min,
//         maxPrice: max,
//     }
// }
// console.log(minMax(myFun));

///////// amaliyot //////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]

// const addNumbers = (...nums) => {
//     let totol = 0
//     for (const i of nums) {
//         totol += i
//     }
//     return totol;    
// }

// console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));


// const sumOfNums = (n) => {
//     let num = n - 1;
//     if (num >= 1) {
//         return n + sumOfNums(num)
//     }
//     return n
// }

// console.log(sumOfNums(3));

// const products = [{
//         "id": 1,
//         "name": "Apple",
//         "category": "Fruit",
//         "description": "A round fruit with a red, green, or yellow skin and a white, crunchy interior.",
//         "price": 89,
//         "rating": 5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food0"
//     },
//     {
//         "id": 2,
//         "name": "Banana",
//         "category": "Fruit",
//         "description": "A long, curved fruit with a yellow skin and sweet, creamy white flesh.",
//         "price": 71,
//         "rating": 5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food1"
//     },
//     {
//         "id": 3,
//         "name": "Bread",
//         "category": "Bakery",
//         "description": "A staple food made from flour, water, and yeast, baked into a loaf.",
//         "price": 88,
//         "rating": 5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food2"
//     },
//     {
//         "id": 4,
//         "name": "Broccoli",
//         "category": "Vegetable",
//         "description": "A green vegetable with a tree-like appearance, known for its high nutrient content.",
//         "price": 94,
//         "rating": 4.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food3"
//     },
//     {
//         "id": 5,
//         "name": "Carrot",
//         "category": "Vegetable",
//         "description": "A root vegetable with a crunchy texture and a sweet, earthy flavor.",
//         "price": 82,
//         "rating": 5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food4"
//     },
//     {
//         "id": 6,
//         "name": "Cheese",
//         "category": "Dairy",
//         "description": "A dairy product made from milk, with a variety of textures and flavors.",
//         "price": 91,
//         "rating": 3.5,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food5"
//     },
//     {
//         "id": 7,
//         "name": "Chicken",
//         "category": "Meat",
//         "description": "A type of poultry, often used as a source of protein in meals.",
//         "price": 68,
//         "rating": 3.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food6"
//     },
//     {
//         "id": 8,
//         "name": "Chocolate",
//         "category": "Dessert",
//         "description": "A sweet food made from cacao beans, used in a variety of desserts and confections.",
//         "price": 61,
//         "rating": 4.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food7"
//     },
//     {
//         "id": 9,
//         "name": "Coffee",
//         "category": "Dessert",
//         "description": "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.",
//         "price": 98,
//         "rating": 5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food8"
//     },
//     {
//         "id": 10,
//         "name": "Egg",
//         "category": "Dairy",
//         "description": "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
//         "price": 79,
//         "rating": 4.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food9"
//     },
//     {
//         "id": 11,
//         "name": "Fish",
//         "category": "Meat",
//         "description": "A type of seafood, known for its omega-3 fatty acids and high protein content.",
//         "price": 89,
//         "rating": 3.5,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food10"
//     },
//     {
//         "id": 12,
//         "name": "Grapes",
//         "category": "Fruit",
//         "description": "A small, sweet fruit that grows in clusters, often used in wine-making.",
//         "price": 61,
//         "rating": 4,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food11"
//     },
//     {
//         "id": 13,
//         "name": "Hamburger",
//         "category": "Fast food",
//         "description": "A sandwich made with a patty of ground beef, served on a bun with various toppings.",
//         "price": 87,
//         "rating": 5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food12"
//     },
//     {
//         "id": 14,
//         "name": "Hot dog",
//         "category": "Fast food",
//         "description": "A type of sausage served in a long roll, often used as a quick and convenient food.",
//         "price": 84,
//         "rating": 4.5,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food13"
//     },
//     {
//         "id": 15,
//         "name": "Ice cream",
//         "category": "Dessert",
//         "description": "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.",
//         "price": 68,
//         "rating": 4.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food14"
//     },
//     {
//         "id": 16,
//         "name": "Lemon",
//         "category": "Fruit",
//         "description": "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.",
//         "price": 74,
//         "rating": 3.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food15"
//     },
//     {
//         "id": 17,
//         "name": "Eggs",
//         "category": "Dairy",
//         "description": "Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.",
//         "price": 70,
//         "rating": 4.5,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food16"
//     },
//     {
//         "id": 18,
//         "name": "Honey",
//         "category": "Dairy",
//         "description": "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.",
//         "price": 87,
//         "rating": 4,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food17"
//     },
//     {
//         "id": 19,
//         "name": "Ice Cream",
//         "category": "Dessert",
//         "description": "Ice cream is a frozen dessert made from cream, sugar, and flavorings.",
//         "price": 83,
//         "rating": 4.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food18"
//     },
//     {
//         "id": 20,
//         "name": "Jelly",
//         "category": "Fruit",
//         "description": "Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.",
//         "price": 76,
//         "rating": 5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food19"
//     },
//     {
//         "id": 21,
//         "name": "Ketchup",
//         "category": "Dairy",
//         "description": "Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.",
//         "price": 77,
//         "rating": 5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food20"
//     },
//     {
//         "id": 22,
//         "name": "Mango",
//         "category": "Fruit",
//         "description": "Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.",
//         "price": 80,
//         "rating": 5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food21"
//     },
//     {
//         "id": 23,
//         "name": "Noodles",
//         "category": "Meat",
//         "description": "Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.",
//         "price": 93,
//         "rating": 3.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food22"
//     },
//     {
//         "id": 24,
//         "name": "Oatmeal",
//         "category": "Breakfast",
//         "description": "Oatmeal is a type of porridge made from oats that is often served for breakfast.",
//         "price": 94,
//         "rating": 4.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food23"
//     },
//     {
//         "id": 25,
//         "name": "Bacon",
//         "category": "Breakfast",
//         "description": "Bacon is a popular breakfast food made from cured pork belly.",
//         "price": 71,
//         "rating": 3.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food24"
//     },
//     {
//         "id": 26,
//         "name": "Pancakes",
//         "category": "Breakfast",
//         "description": "Pancakes are a popular breakfast food made from flour, eggs, and milk.",
//         "price": 63,
//         "rating": 4,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food25"
//     },
//     {
//         "id": 27,
//         "name": "Waffles",
//         "category": "Breakfast",
//         "description": "Waffles are a type of breakfast food made from batter cooked in a waffle iron.",
//         "price": 97,
//         "rating": 4.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food26"
//     },
//     {
//         "id": 28,
//         "name": "Fried Rice",
//         "category": "Lunch",
//         "description": "Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.",
//         "price": 81,
//         "rating": 4,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food27"
//     },
//     {
//         "id": 29,
//         "name": "Spaghetti",
//         "category": "Lunch",
//         "description": "Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.",
//         "price": 96,
//         "rating": 4,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food28"
//     },
//     {
//         "id": 30,
//         "name": "Pizza",
//         "category": "Lunch",
//         "description": "Pizza is a popular dish made from dough, sauce, cheese, and toppings.",
//         "price": 95,
//         "rating": 4,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food29"
//     },
//     {
//         "id": 31,
//         "name": "Grilled Cheese",
//         "category": "Lunch",
//         "description": "A grilled cheese sandwich is a hot sandwich made from cheese and bread.",
//         "price": 100,
//         "rating": 5,
//         "discount": 50,
//         "image": "https://picsum.photos/200/300/?food30"
//     },
//     {
//         "id": 32,
//         "name": "Steak",
//         "category": "Dinner",
//         "description": "Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.",
//         "price": 63,
//         "rating": 4.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food31"
//     },
//     {
//         "id": 33,
//         "name": "Salmon",
//         "category": "Dinner",
//         "description": "Salmon is a type of fish that is often grilled or baked and served as a main course.",
//         "price": 82,
//         "rating": 4.5,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food32"
//     },
//     {
//         "id": 34,
//         "name": "Chicken Alfredo",
//         "category": "Dinner",
//         "description": "Chicken Alfredo is a pasta dish made with chicken, fettuccine pasta, and a creamy Alfredo sauce.",
//         "price": 94,
//         "rating": 4,
//         "discount": 20,
//         "image": "https://picsum.photos/200/300/?food33"
//     },
//     {
//         "id": 35,
//         "name": "Lasagna",
//         "category": "Dinner",
//         "description": "Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.",
//         "price": 70,
//         "rating": 5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food34"
//     },
//     {
//         "id": 36,
//         "name": "Chocolate Chip Cookies",
//         "category": "Dessert",
//         "description": "Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.",
//         "price": 98,
//         "rating": 3.5,
//         "discount": 0,
//         "image": "https://picsum.photos/200/300/?food35"
//     }
// ]

// const inputSearch = document.querySelector('.box__search'),
//     searchBtn = document.querySelector('.box__search__btn'),
//     block = document.querySelector('.block');

// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const allProducts = products.map((element) => {
//         if (inputSearch.value === element.name) {
//             return block.innerHTML += `
//             <img class="block__img" src="${element.image}" alt="">
//             <h2 class="bloch__title"> Name: ${element.name} </h2>
//             <h3 class="block__category">Category: ${element.category}  </h3>`
//         }
//     })
// })

// inputSearch.addEventListener('input', (e) => {
//     e.preventDefault()


//     const searchDatas = products.map((el) => {
//         if (inputSearch.value === el) {
//             return block.innerHTML +=
//                 `<img class="block__img" src="${el.image}" alt="img">
//             <h2 class="bloch__title"> Name: ${el.name} </h2>
//             <h3 class="block__category">Category: ${el.category}</h3>`

//         }
//     })
// })