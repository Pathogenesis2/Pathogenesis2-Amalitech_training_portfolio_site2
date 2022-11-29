let num = document.querySelector('#num');
let icon = document.querySelector('#icon');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let four = document.querySelector('#four');
let six = document.querySelector('#six');
let strtBn = document.querySelector('#strtBn')
num.style.backgroundColor='#304859';
num1.style.backgroundColor='#304859';
four.style.backgroundColor='#304859'


function backgroundChange(variable){
	let content = variable.parentElement.children;
	for(let i=0; i<content.length; i++){
		if(content[i].id==variable.id){
			document.querySelector(`#${content[i].id}`).style.backgroundColor='#304859'
		}
		else{
			document.querySelector(`#${content[i].id}`).style.backgroundColor=''
		}		
	}
}

function era (backgroundChange){
	if(document.querySelector(`#${backgroundChange.content[i].id}`).style.backgroundColor='#304859'){
		console.log(content[i].id)
	}
}