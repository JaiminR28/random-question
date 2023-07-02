"use strict";
const question = document.querySelector(".question");
const button = document.querySelector(".random--button");

button.addEventListener("click", function () {
	const random = Math.floor(Math.random() * (380 - 1 + 1) + 1);
	console.log(random);
	question.innerHTML = random;
});
