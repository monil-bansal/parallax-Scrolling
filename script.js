let xScrollPosition;
let yScrollPosition;
const bigYellowCircle = document.querySelector("#bigYellowCircle");
const blueSquare = document.querySelector("#blueSquare");
const greenPentagon = document.querySelector("#greenPentagon");

const scrollLoop = (e) => {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;
	let xPos=0; 
	setTranslate(0, yScrollPosition * 0.5, bigYellowCircle);
	setTranslate(0, yScrollPosition * -0.3, blueSquare);
	setTranslate(0, yScrollPosition * 1.5, greenPentagon);

	requestAnimationFrame(scrollLoop);
}

const setTranslate = (xPos,yPos,el) => {
	el.style.transform=`translate3D(${xPos}, ${yPos}px,0`;
}

window.addEventListener("DOMContentLoaded",scrollLoop,false);




