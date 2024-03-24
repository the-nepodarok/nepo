let style1 = document.querySelector('.page-header');
let style2 = document.querySelector('.page-footer');
let link = document.querySelector('a');
let butt = document.querySelector('.button');
let sum = document.querySelector('.sum');

link.classList.add('dark-link');

butt.onclick = function () {
style1.classList.toggle('dark-page-header');
style2.classList.toggle('dark-page-footer');
};

let like = document.querySelector('.emoticon');
let counter = 1;

let numb = document.createElement('span');
like.append(numb);

like.onclick = function () {
	like.classList.toggle('pressed');
		numb.textContent = counter;
	
	if (like.classList.contains('pressed')) {counter = counter-1;}
	else{
	counter = counter + 1;}
}

let prices = document.querySelectorAll('.price');

//for (let price of prices) {
	console.log(prices); sum.textContent = number;