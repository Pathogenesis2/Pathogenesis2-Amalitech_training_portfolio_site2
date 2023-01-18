
		let seconds = document.getElementById('seconds');
		let minutes = document.getElementById('minutes');
		let firstChoice;
		let secondChoice;
		let keeper={'increment':1};
		let score = {'score1':0, 'score2':0, 'score3':0}
		const balls = [].slice.call(document.getElementById("balls").children);
		let counter=0;
		
		
		const restart =()=>{
			window.location.reload();  
		}
		
		const newGame=()=>{
			location.href='../../start.html'
		}
		
		const menu=()=>{
			if(window.matchMedia("(max-width: 480px)").matches){
				document.getElementById('m-fader').style.display='block';
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

		let bal = document.querySelector("#balls")
		for (var i = bal.children.length; i >= 0; i--) {
    		bal.appendChild(bal.children[Math.random() * i | 0]);
		}
		console.log(bal)
		
		document.getElementById('Player1').style.backgroundColor='#FDA214'
		document.getElementById('Player1').style.color='#Fcfcfc'
		document.getElementById('svg2').style.visibility='hidden'
		document.getElementById('Player3').style.backgroundColor=''
		document.getElementById('svg3').style.visibility='hidden'
		
		balls.forEach((ball) => {
			ball.addEventListener("click", () => {
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
						main()
						if(document.getElementsByClassName('checked').length===document.getElementsByClassName('ball_element').length){
							if((score['score2'] < score['score1'] && score['score2'] > score['score3']) || (score['score2'] < score['score1'] && score['score2'] === score['score3'])){
								document.querySelector('#box1-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 2'
								document.querySelector('#box2-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 3'
								document.querySelector('#box3-pair').innerHTML=score['score3'] + ' Pairs'
							}
							else if(score['score1'] > score['score3'] && score['score2'] < score['score3']){
								document.querySelector('#box1-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 3'
								document.querySelector('#box2-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 2'
								document.querySelector('#box3-pair').innerHTML=score['score2'] + ' Pairs'
							}
							else if((score['score1'] < score['score2'] && score['score1'] > score['score3']) || (score['score1'] < score['score2'] && score['score1'] === score['score3'])){
								document.querySelector('#box1-c').innerHTML='Player 2 (Winner!)'
								document.querySelector('#box1-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 1'
								document.querySelector('#box2-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 3'
								document.querySelector('#box3-pair').innerHTML=score['score3'] + ' Pairs'
							}
							else if(score['score2'] > score['score3'] && score['score1'] < score['score3']){
								document.querySelector('#box1-c').innerHTML='Player 2 (Winner!)'
								document.querySelector('#box1-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 3'
								document.querySelector('#box2-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 1'
								document.querySelector('#box3-pair').innerHTML=score['score1'] + ' Pairs'
							}
							else if((score['score1'] < score['score3'] && score['score1'] > score['score2']) || (score['score1'] < score['score3'] && score['score1'] === score['score2'])){
								document.querySelector('#box1-c').innerHTML='Player 3 (Winner!)'
								document.querySelector('#box1-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 1'
								document.querySelector('#box2-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 2'
								document.querySelector('#box3-pair').innerHTML=score['score2'] + ' Pairs'
							}
							else if(score['score3'] > score['score2'] && score['1'] < score['score2']){
								document.querySelector('#box1-c').innerHTML='Player 3 (Winner!)'
								document.querySelector('#box1-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 2'
								document.querySelector('#box2-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 1'
								document.querySelector('#box3-pair').innerHTML=score['score1'] + ' Pairs'
							}
			
							else if(score['score1'] === score['score3'] && score['score1'] > score['score2']){
								document.querySelector('#speech').innerHTML='It is a Tie!'
								document.querySelector('#box1-c').innerHTML='Player 1'
								document.querySelector('#box1-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 3'
								document.querySelector('#box2-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 2'
								document.querySelector('#box3-pair').innerHTML=score['score2'] + ' Pairs'
							}
							else if(score['score2'] === score['score3'] && score['score2'] > score['score1']){
								document.querySelector('#speech').innerHTML='There is a Tie!'
								document.querySelector('#box1-c').innerHTML='Player 2'
								document.querySelector('#box1-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 3'
								document.querySelector('#box2-pair').innerHTML=score['score3'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 1'
								document.querySelector('#box3-pair').innerHTML=score['score1'] + ' Pairs'
							}
							else{
								document.querySelector('#speech').innerHTML='There is a Tie!'
								document.querySelector('#box1-c').innerHTML='Player 1'
								document.querySelector('#box1-pair').innerHTML=score['score1'] + ' Pairs'
								document.querySelector('#box2-c').innerHTML='Player 2'
								document.querySelector('#box2-pair').innerHTML=score['score2'] + ' Pairs'
								document.querySelector('#box3-c').innerHTML='Player 3'
								document.querySelector('#box3-pair').innerHTML=score['score3'] + ' Pairs'
							}
							document.querySelector('#fader').style.display='block'
						}
					}
				}
				
			});
		});
		
		function main(){
			if (firstChoice === secondChoice && firstindex !== secondIndex) {
				const correctCards = document.querySelectorAll(
				".ball_element[animal='" + firstChoice + "']"
				);
				
				correctCards[0].classList.add("checked");
				correctCards[0].classList.remove("clicked");
				correctCards[1].classList.add("checked");
				correctCards[1].classList.remove("clicked");
				
				if(window.getComputedStyle(document.getElementById('Player1')).backgroundColor==='rgb(253, 162, 20)'){
					score['score1']+=1
					document.getElementById('score1').innerHTML=score['score1']
				}
				else if(window.getComputedStyle(document.getElementById('Player2')).backgroundColor==='rgb(253, 162, 20)'){
					
					score['score2']+=1;
					document.getElementById('score2').innerHTML=score['score2']
				}
                else{
                    score['score3']+=1;
                    document.getElementById('score3').innerHTML=score['score3'];

                }
			}
			else if (firstChoice === secondChoice && firstindex === secondIndex) {
				const correctCards = document.querySelectorAll(
				".ball_element[animal='" + firstChoice + "']");
				correctCards[0].classList.remove("clicked");
				correctCards[1].classList.remove("clicked");
			} 
			
			
			else {
				const incorrectCards = document.querySelectorAll(".clicked");
				setTimeout(() => {
					incorrectCards[0].classList.remove("clicked");
					incorrectCards[1].classList.remove("clicked");
				}, 800);
				keeper['increment']+=1
                if(window.getComputedStyle(document.getElementById('Player1')).backgroundColor==='rgb(253, 162, 20)'){
					document.getElementById('Player2').style.backgroundColor='#FDA214'
					document.getElementById('Player2').style.color='#Fcfcfc'
					document.getElementById('svg2').style.visibility=''
					document.getElementById('Player1').style.backgroundColor=''
					document.getElementById('Player1').style.color=''
					document.getElementById('svg1').style.visibility='hidden'
				}
				else if(window.getComputedStyle(document.getElementById('Player2')).backgroundColor==='rgb(253, 162, 20)'){
                    document.getElementById('Player3').style.backgroundColor='#FDA214'
					document.getElementById('Player3').style.color='#Fcfcfc'
					document.getElementById('svg3').style.visibility=''
					document.getElementById('Player2').style.backgroundColor=''
					document.getElementById('Player2').style.color=''
					document.getElementById('svg2').style.visibility='hidden'
				}
                else{
                    document.getElementById('Player1').style.backgroundColor='#FDA214'
					document.getElementById('Player1').style.color='#Fcfcfc'
					document.getElementById('svg1').style.visibility=''
					document.getElementById('Player3').style.backgroundColor=''
					document.getElementById('Player3').style.color=''
					document.getElementById('svg3').style.visibility='hidden'

                }
				
			}
			
			
        }