#!/usr/bin/env node

//
var op = process.argv[2],
	num1 = +process.argv[3],
	num2 = +process.argv[4];

if ("add" === op || "+" === op) {
	console.log(num1 + num2);
}

if ("subtract" === op || "-" === op) {
	console.log(num1 - num2);
}

if ("multiply" === op || "*" === op) {
	console.log(num1 * num2);
}

if ("divide" === op || "/" === op) {
	console.log(num1 / num2);
}