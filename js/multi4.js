
		let seconds = document.getElementById('seconds');
		let minutes = document.getElementById('minutes');
		let firstChoice;
		let secondChoice;
		let keeper={'increment':1};
		let score = {'score1':0, 'score2':0, 'score3':0, 'score4':0}

		const balls = [].slice.call(document.getElementById("balls").children);
		let counter=0;
		
		
		const restart =()=>{
			window.location.reload();  
		}
		
		const newGame=()=>{
			location.href='../start.html'
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
		
		document.getElementById('Player1').style.backgroundColor='#FDA214'
		document.getElementById('Player1').style.color='#Fcfcfc'
		
		balls.forEach((ball) => {
			ball.addEventListener("click", () => {
				ball.classList.add("clicked");
				
				if (counter === 0) {
					firstChoice = ball.getAttribute("animal");
					firstindex = balls.indexOf(ball);
					counter++;
				}
				else {
					secondChoice = ball.getAttribute("animal");
					secondIndex = balls.indexOf(ball);
					counter = 0;
					main()
					
					if(document.getElementsByClassName('checked').length===document.getElementsByClassName('ball_element').length){
						let newScore={}
						let maxNumLenght = []
						
                        for (let s=0 ; s< Object.values(score).length; s++){
                            if (Object.values(score)[s]===Math.max(...Object.values(score))){
                                maxNumLenght.push(Object.values(score)[s])
                            }
                        }
						for(let i=0; i<Object.keys(score).length; i++){
							if(Object.values(score)[i]===Math.max(...Object.values(score))){
								newScore['score'+  Object.keys(score)[i].slice(-1)]=Object.values(score)[i]
								delete score[Object.keys(score)[i]]
							}
						}
						for(let i=0; i<Object.keys(score).length; i++){
							if(Object.values(score)[i]===Math.max(...Object.values(score))){
								newScore['score'+  Object.keys(score)[i].slice(-1)]=Object.values(score)[i]
								delete score[Object.keys(score)[i]]
							}
						}
						for(let i=0; i<Object.keys(score).length; i++){
							if(Object.values(score)[i]===Math.max(...Object.values(score))){
								newScore['score'+  Object.keys(score)[i].slice(-1)]=Object.values(score)[i]
								delete score[Object.keys(score)[i]]
							}
						}
						for(let i=0; i<Object.keys(score).length; i++){
							if(Object.values(score)[i]===Math.max(...Object.values(score))){
								newScore['score'+  Object.keys(score)[i].slice(-1)]=Object.values(score)[i]
								delete score[Object.keys(score)[i]]
							}
						}
                        if(maxNumLenght.length>1){
                            document.getElementById('speech').innerHTML='It is a tie!'
							document.getElementById('box1-c').innerHTML='Player ' + Object.keys(newScore)[0].slice(-1)  
							document.getElementById('box1-pair').innerHTML=Object.values(newScore)[0] + ' Pairs'
						}
						else{
							document.getElementById('speech').innerHTML='We have a winner!'
							document.getElementById('box1-c').innerHTML='Player ' + Object.keys(newScore)[0].slice(-1)+ ' (Winner!)'  
							document.getElementById('box1-pair').innerHTML=Object.values(newScore)[0] + ' Pairs'
						}
						document.getElementById('box2-c').innerHTML='Player ' + Object.keys(newScore)[1].slice(-1)  
						document.getElementById('box2-pair').innerHTML=Object.values(newScore)[1] + ' Pairs'
						document.getElementById('box3-c').innerHTML='Player ' + Object.keys(newScore)[2].slice(-1) 
						document.getElementById('box3-pair').innerHTML=Object.values(newScore)[2] + ' Pairs'
						document.getElementById('box4-c').innerHTML='Player ' + Object.keys(newScore)[3].slice(-1)   
						document.getElementById('box4-pair').innerHTML=Object.values(newScore)[3] + ' Pairs'
						document.querySelector('#fader').style.display='block'
					}    
                }
			}
		)})
		
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
                else if(window.getComputedStyle(document.getElementById('Player3')).backgroundColor==='rgb(253, 162, 20)'){
                    score['score3']+=1;
                    document.getElementById('score3').innerHTML=score['score3'];
                }
                else{
                    score['score4']+=1;
                    document.getElementById('score4').innerHTML=score['score4'];
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
					document.getElementById('Player1').style.backgroundColor=''
					document.getElementById('Player1').style.color=''
				}
				else if(window.getComputedStyle(document.getElementById('Player2')).backgroundColor==='rgb(253, 162, 20)'){
                    document.getElementById('Player3').style.backgroundColor='#FDA214'
					document.getElementById('Player3').style.color='#Fcfcfc'
					document.getElementById('Player2').style.backgroundColor=''
					document.getElementById('Player2').style.color=''
				}
                else if(window.getComputedStyle(document.getElementById('Player3')).backgroundColor==='rgb(253, 162, 20)'){
                    document.getElementById('Player4').style.backgroundColor='#FDA214'
					document.getElementById('Player4').style.color='#Fcfcfc'
					document.getElementById('Player3').style.backgroundColor=''
					document.getElementById('Player3').style.color=''

                }
                else{
                    document.getElementById('Player1').style.backgroundColor='#FDA214'
					document.getElementById('Player1').style.color='#Fcfcfc'
					document.getElementById('Player4').style.backgroundColor=''
					document.getElementById('Player4').style.color=''
                }
				
			}
			
			
        }