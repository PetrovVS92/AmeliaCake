(function() {
	var dot1 = document.querySelector('.slider-reviews__item:nth-child(1)');
	var dot2 = document.querySelector('.slider-reviews__item:nth-child(2)');
	var dot3 = document.querySelector('.slider-reviews__item:nth-child(3)');
	var block1 = document.querySelector('.reviews__block1');
	var block2 = document.querySelector('.reviews__block2');
	var block3 = document.querySelector('.reviews__block3');
	var visible = document.querySelector('.visible');
	var invisible = document.querySelector('.invisible');

	console.log(dot1); console.log(dot2); console.log(dot3);

	dot1.addEventListener("mouseover",
		function() {
			block1.classList.add('visible');
			block2.classList.remove("visible");
			block3.classList.remove("visible");
			dot1.classList.add("slider-reviews__item-active");
			dot2.classList.remove("slider-reviews__item-active");
			dot3.classList.remove("slider-reviews__item-active");
		});
	dot2.addEventListener("mouseover",
		function() {
			block2.classList.add("visible");
			block1.classList.remove("visible");
			block3.classList.remove("visible");
			dot2.classList.add("slider-reviews__item-active");
			dot1.classList.remove("slider-reviews__item-active");
			dot3.classList.remove("slider-reviews__item-active");
		});
	dot3.addEventListener("mouseover",
		function() {
			block3.classList.add("visible");
			block1.classList.remove("visible");
			block2.classList.remove("visible");
			dot3.classList.add("slider-reviews__item-active");
			dot1.classList.remove("slider-reviews__item-active");
			dot2.classList.remove("slider-reviews__item-active");
		});
	
})();