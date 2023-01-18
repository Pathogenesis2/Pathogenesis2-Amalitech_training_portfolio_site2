let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let firstChoice;
let secondChoice;
let keeper={'minute':'','seconds':''};
let move={'mv':''};
let balls = [].slice.call(document.getElementById("balls").children);
let adder= 0;
let counter=0;
let sec = 0;
let min = 0;
let holder ={'min':0, 'sec':0}

let timer=()=>{setInterval(()=>{
    sec++
    if(sec>0 && sec%60===0){
        min+=1
        minutes.innerHTML = min+':';
        sec = 0;
        keeper['minute']=min
        holder['min']=min
        
    }
    if (sec<9){
        seconds.innerHTML = '0'+sec
    }
    else if(sec===9){
        seconds.innerHTML = '09'
    }
    else{
        seconds.innerHTML = sec
    }
    holder['sec']=sec
    keeper['seconds']=sec;
    },1000)
}

const restart =()=>{
    window.location.reload(); 
}

const newGame=()=>{
    location.href='../../start.html'
}

const menu=()=>{
    if(window.matchMedia("(max-width: 480px)").matches){
        document.getElementById('m-fader').style.display='block';
        console.log('we did')
    }
}

const resume=()=>{
    document.getElementById('fader').style.display='';
    document.getElementById('m-fader').style.display=''
}

addEventListener('resize',()=>{
    if(window.matchMedia("(min-width: 481px)").matches){
        document.getElementById('m-fader').style.display='';
    }
})
document.body.onload=timer
console.log(keeper)
let bal = document.querySelector("#balls")
for (var i = bal.children.length; i >= 0; i--) {
    bal.appendChild(bal.children[Math.random() * i | 0]);
}
console.log(bal)
balls.forEach((ball) => {
    ball.addEventListener("click", () => {
        console.log( [].slice.call(ball.classList))

        if (counter === 0) {
            firstChoice = ball.getAttribute("animal");
            firstindex = balls.indexOf(ball);
            if(![].slice.call(ball.classList).includes('checked')){
                ball.classList.add("clicked");
                counter++;
            }     
            else{
                counter=0;
            }  
        }
         else {
            if(![].slice.call(ball.classList).includes('clicked')){
                ball.classList.add("clicked");
                secondChoice = ball.getAttribute("animal");
                secondIndex = balls.indexOf(ball);
                counter = 0;
                if (firstChoice === secondChoice && firstindex !== secondIndex) {
                    const correctCards = document.querySelectorAll(
                    ".ball_element[animal='" + firstChoice + "']"
                    );

                    correctCards[0].classList.add("checked");
                    correctCards[0].classList.remove("clicked");
                    correctCards[1].classList.add("checked");
                    correctCards[1].classList.remove("clicked");
                    adder++
                    }else if (firstChoice === secondChoice && firstindex === secondIndex) {
                    const correctCards = document.querySelectorAll(
                    ".ball_element[animal='" + firstChoice + "']"
                    );

                    correctCards[0].classList.remove("clicked");
                    correctCards[1].classList.remove("clicked");} 
                    else {
                    const incorrectCards = document.querySelectorAll(".clicked");
                    incorrectCards[0].classList.add("missed");
                    incorrectCards[1].classList.add("missed");

                    setTimeout(() => {
                    incorrectCards[0].classList.remove("missed");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("missed");
                    incorrectCards[1].classList.remove("clicked");
                    }, 800);
                    adder++
                    
                }if(document.getElementsByClassName('checked').length===document.getElementsByClassName('ball_element').length){
                    console.log(true)
                    console.log(move['mv'])
                    console.log([holder['min'], holder['sec']])
                    document.querySelector('#min').innerHTML=holder['min']+':'+holder['sec'];
                    document.querySelector('#mov').innerHTML=move['mv']+1+' '+ 'moves';
                    clearInterval(timer)
                    document.querySelector('#fader').style.display='block'
                }
            }
        
        move['mv']=adder;
        document.querySelector('#js').innerHTML= move['mv']
        }
    });
});