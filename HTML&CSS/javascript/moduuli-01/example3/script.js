'use strict';

const num= document.querySelector('.num');

const product = document.querySelector('.product');

const average = document.querySelector('.average');

const num1 = parseInt(prompt("kirjoita numero 1"));

const product1 = parseInt(prompt("kirjoita numero 2"));

const average1 = parseInt(prompt("kirjoita numero 3"));

let totalSum = num1 + product1 + average1;
let totalProduct = num1 * product1 * average1;
let totalAverage = totalProduct/3;

num.innerHTML = `Sum ${totalSum}`;
product.innerHTML = `Product ${totalProduct}`;
average.innerHTML = `Average ${totalAverage}`;