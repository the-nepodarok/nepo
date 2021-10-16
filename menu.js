let prices = document.querySelectorAll('.price');
let sum = document.querySelector('.sum');


for (let price of prices) {
	console.log(prices);
	let number = prices[0].textContent + ' + ' + prices[1].textContent;
sum.textContent = number;}