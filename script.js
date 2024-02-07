const btn = document.getElementById("btn");
const child1 = document.querySelector(".child-1");

child1.textContent = "I am God!";
child1.style.padding = "1rem";
child1.style.backgroundColor = "purple";
child1.style.color = "white";
child1.style.fontFamily = "sans-serif";

const h1 = document.createElement("h1");
h1.textContent = "Saurav Verma";
h1.classList.add("header");

const parent = document.querySelector(".parent");
parent.appendChild(h1);
