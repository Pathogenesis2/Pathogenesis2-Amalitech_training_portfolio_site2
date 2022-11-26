let minutes= document.getElementById('minutes');
let seconds= document.getElementById('seconds');
let min = 0;
let sec = 0;
let interval;

let logic=()=>{
	sec++;
	if(sec > 59 && sec%60 === 0){
		min+=1;
		if(min<=9) {
			minutes.innerHTML=`0${min}`
			} 
		else{
			minutes.innerHTML=`${min}`;
		}
		sec= 0;
	};
	if(sec<=9) {
		seconds.innerHTML=`0${sec}`
		}
	else{
		seconds.innerHTML=`${sec}`
	}
}

let timeRunner= function(){
	interval = setInterval(logic(),1000)
};
timeRunner()