let num = document.querySelector('#num');
let icon = document.querySelector('#icon');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let four = document.querySelector('#four');
let six = document.querySelector('#six');
let strtBn = document.querySelector('#strtBn');

//timer for all game pages

//changing background of chosen elements onclick
function backgroundChange(variable){
	let content = variable.parentElement.children;
	for(let i=0; i<content.length; i++){
		if(content[i].id==variable.id){
			document.querySelector(`#${content[i].id}`).style.backgroundColor='#304859'	
		}
		else{
			document.querySelector(`#${content[i].id}`).style.backgroundColor='';
		}		
	}
}


//switching to the game page on click of the start game button
function selector (){
	console.log(window.getComputedStyle(num2).getPropertyValue('background-color'))
	if( window.getComputedStyle(num).getPropertyValue('background-color') ==='rgb(48, 72, 89)' &&  window.getComputedStyle(num1).getPropertyValue('background-color')==='rgb(48, 72, 89)' &&  window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4num_single.html';
	}
	else if(window.getComputedStyle(num).getPropertyValue('background-color') ==='rgb(48, 72, 89)' && window.getComputedStyle(num3).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4num_multi3.html'
	}
	else if (window.getComputedStyle(num).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num2).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4num_multi2.html'
	}
	else if (window.getComputedStyle(num).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num4).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4num_multi4.html'
	}
	else if( window.getComputedStyle(icon).getPropertyValue('background-color') ==='rgb(48, 72, 89)' &&  window.getComputedStyle(num1).getPropertyValue('background-color')==='rgb(48, 72, 89)' &&  window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4icon_single.html';
	}
	else if(window.getComputedStyle(icon).getPropertyValue('background-color') ==='rgb(48, 72, 89)' && window.getComputedStyle(num3).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4icon_multi3.html'
	}
	else if (window.getComputedStyle(icon).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num2).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4icon_multi2.html'
	}
	else if (window.getComputedStyle(icon).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num4).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(four).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/4x4/4x4icon_multi4.html'
	}
	else if( window.getComputedStyle(num).getPropertyValue('background-color') ==='rgb(48, 72, 89)' &&  window.getComputedStyle(num1).getPropertyValue('background-color')==='rgb(48, 72, 89)' &&  window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6numsingle.html';
	}
	else if(window.getComputedStyle(num).getPropertyValue('background-color') ==='rgb(48, 72, 89)' && window.getComputedStyle(num3).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6num_multi3.html'
	}
	else if (window.getComputedStyle(num).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num2).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6num_multi2.html'
	}
	else if (window.getComputedStyle(num).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num4).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6num_multi4.html'
	}
	else if( window.getComputedStyle(icon).getPropertyValue('background-color') ==='rgb(48, 72, 89)' &&  window.getComputedStyle(num1).getPropertyValue('background-color')==='rgb(48, 72, 89)' &&  window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6iconsingle.html';
	}
	else if(window.getComputedStyle(icon).getPropertyValue('background-color') ==='rgb(48, 72, 89)' && window.getComputedStyle(num3).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6icon_multi3.html'
	}
	else if (window.getComputedStyle(icon).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num2).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6icon_multi2.html'
	}
	else if (window.getComputedStyle(icon).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(num4).getPropertyValue('background-color')==='rgb(48, 72, 89)' && window.getComputedStyle(six).getPropertyValue('background-color')==='rgb(48, 72, 89)'){
		location.href='../html/6x6/6x6icon_multi4.html'
	}
}