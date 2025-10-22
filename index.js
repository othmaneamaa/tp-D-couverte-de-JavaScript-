//Exercice 1:  
/*var x = 5;
let y = 10;
const z = 15;


x = 20;   
y = 30;   
z = 40;  

console.log(x); 
console.log(y); 
console.log(z);

*/

//Exercice 2:
/*function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a);
  console.log(b);
}

testScope();
*/

// Exerice 3:
/*function sayHello(name) {
  return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Ahmed"));       
console.log(sayHelloArrow("Amine"));
*/
// Exerice 4: Importer des modules
/*import message, { PI, carre } from "./mathUtils.js";

message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));*/

// Exerice 5: Manipuler des tableaux
/*const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);*/

// Exerice 6: map, filter, reduce
/*const nums = [1, 2, 3, 4, 5];

// map : crée un nouveau tableau avec chaque nombre multiplié par 2
const doubles = nums.map(n => n * 2);
console.log("map →", doubles);

// filter : garde seulement les nombres pairs
const pairs = nums.filter(n => n % 2 === 0);
console.log("filter →", pairs);

// reduce : additionne tous les nombres
const somme = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce →", somme);*/

// Exerice 7: find, some, every
/*console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));*/

// Exerice 8: Déstructuration et renommage
/*const user = { id: 1, name: "Ali", city: "Rabat" };
// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);
// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);*/

// Exerice 9: Promise simple
/*const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});

p.then(result => console.log(result));
*/

// Exerice 10: Async/Await
/*async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}

getUsers();*/

// Exerice 11: Template literals
/*const name = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour}h`);*/

//Exerice 12: Spread / Rest Operators
/*const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); */

// Exerice 13: Nullish coalescing et Optional chaining
/*const settings = { theme: null };
console.log(settings.theme ?? "light"); 

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);*/

// Exerice 14: Gestion des produits
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();


const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);


const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");





