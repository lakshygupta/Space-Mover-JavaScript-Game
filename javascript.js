const astro = document.querySelector('.astro');
let x = 0;
let y = 0;
let speed = 20;
let flipped = false;
let rotate = 0;
function handleKeys(e){
	if(!e.key.includes('Arrow')){return;}
	if(x<0) x = 0;
	if(y<0) y = 0;
	// if((x*speed)>window.innerWidth) x = x;
	// if((y*speed)>window.innerHeight) y = y;
	switch(e.key){
		case 'ArrowUp':  if(y>=0 && y<=window.innerHeight){y = y - 1; rotate = -90;} break;
		case 'ArrowDown':if(y>=0 && y<=window.innerHeight){ y = y + 1; rotate = 90;} break;
		case 'ArrowLeft': if(x>=0 && x<=window.innerWidth) {x = x - 1; rotate = 0; flipped = true;} break;
		case 'ArrowRight': if(x>=0 && x<=window.innerWidth){x = x + 1; rotate = 0; flipped = false;} break;
		default: console.log("Invalid Move"); break;
	}
	astro.setAttribute('style',`
		--x:${x*speed}px; 
		--y:${y*speed}px;
		--rotateY:${flipped ? `180deg` : `0`};
		--rotate:${rotate}deg;
	`);
}
window.addEventListener('keydown', handleKeys);

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}