$(document).ready(function () {
	var level = 1;
	var liveCount = 3;
	var noSkips = 7;
	var skips = 0;
	var cantTouch = false;
	
	function roomLevel(){
		switch(level){
			case 1:
				lvOne()
				break;
			case 2:
				lvTwo()
				break;
			case 3:
				lvThree()
				break;
			case 4:
				lvFour()
				break;
			case 5:
				lvFive()
				break;
			case 6:
				lvSix()
				break;
			case 7:
				lvSeven()
				break;
			case 8:
				lvEight()
				break;
			case 9:
				lvNine()
				break;
			case 10:
				lvTen()
				break;
			case 11:
				lvEnd()
				break;
			default:
				alert('Error. Refresh page');
		}
	}
	roomLevel()
	function restart(){
		$('#q1,#q2,#q3,#q4').css({'font-size':'50px','font-family':'Patrick Hand SC, cursive','color':'black'});
		$('#gameOverScreen').hide();
		$('#leftMouseHere,#rightMouseHere,#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect,.sec,#tenOne,#tenTwo,#tenThree,#tenFour,#tenFive').remove();
		$('.Qs,.qContainer').show();
		level = 1;
		liveCount = 3;
		noSkips = 7;
		skips = 0;
		cantTouch = false;
		roomLevel();
	}
	function lvOne(){
		$('#questionText').html('1.');
		$('#titleText').html('HOW MANY HOLES IN A POLO?');
		$('#q1').html('ONE');
		$('#q2').html('TWO');
		$('#q3').html('THREE');
		$('#q4').html('FOUR');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvTwo(){
		$('#questionText').html('2.');
		$('#titleText').html('CAN A MATCH BOX?');
		$('#q1').html('YES');
		$('#q2').html('NO');
		$('#q3').html('NO, BUT A TIN CAN').css({'font-size':'30px'});
		$('#q4').html('YES, ONE BEAT MIKE TYSON').css({'font-size':'29px'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvThree(){
		$('#questionText').html('3.');
		$('#titleText').html('.SDRAWKCAB NOITSEUQ SIHT REWSNA').css({'font-size':'50px'});
		$('#q1').html('K.O');
		$('#q2').html('WHAT?');
		$('#q3').html('I DON\'T UNDERSTAND').css({'font-size':'29px'});
		$('#q4').html('TENNIS ELBOW').css({'font-size':'40px'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvFour(){
		$('#questionText').html('4.');
		$('#titleText').html('CLICK <span id="answerTo4">THE ANSWER</span>').css({'font-size':'60px'});
		$('#q1').html('OUT OF ORDER').css({'font-size':'30px','color':'red'});
		$('#q2').html('OUT OF ORDER').css({'font-size':'30px','color':'red'});
		$('#q3').html('OUT OF ORDER').css({'font-size':'30px','color':'red'});
		$('#q4').html('OUT OF ORDER').css({'font-size':'30px','color':'red'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvFive(){
		$('#leftMouseHere').remove();
		$('#rightMouseHere').remove();
		$('#questionText').html('5.');
		$('#titleText').html('PUT THE MOUSE......<br/> ..... ON HERE');
		$('#bottom').before('<div id="rightMouseHere">Here</div>')
		$('#game').css({'overflow':'hidden','background':'white'});
		$('.qContainer').hide();
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvSix(){
		$('.qContainer').show();
		$('#leftMouseHere').remove();
		$('#rightMouseHere').remove();
		$('#game').css({'overflow':'visible','background':'white'});
		$('#questionText').html('6.');
		$('#titleText').html('√ONION');
		$('#q1').html('28').css({'font-size':'50px','color':'black'});
		$('#q2').html('CARROT').css({'font-size':'50px','color':'black'});
		$('#q3').html('SHALLOTS').css({'font-size':'50px','color':'black'});
		$('#q4').html('π').css({'font-size':'50px','color':'black'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvSeven(){
		$('#questionText').html('7.');
		$('#titleText').html('THE ANSWER IS REALLY BIG');
		$('#q1').html('ANSWER');
		$('#q2').html('REALLY BIG');
		$('#q3').html('∞');
		$('#q4').html('AN ELEPHANT').css({'font-size':'40px'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvEight(){
		$('#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect').remove();
		$('#questionText').html('8.');
		$('#titleText').html('SEARCH!');
		$('.qContainer').hide();
		$('#bottom').before('<div id="notThis1">Nope</div><div id="notThis2">No</div><div id="notThis3">Keep looking</div><div id="notThis4">Try again</div><div id="notThis5">:\\(</div><div id="notThis6">X</div><div id="hiddenCorrect"><i class="fa fa-check" aria-hidden="true"></i></div>')
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvNine(){
		$('.qContainer').show();
		$('#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect').hide();
		$('#questionText').html('9.');
		$('#titleText').html('WHAT WAS THE ANSWER TO QUESTION 2?').css({'font-size':'50px'});
		$('#q1').html('THAT ONE →').css({'font-family':'arial','font-size':'30px'});
		$('#q2').html('THAT ONE ↙').css({'font-family':'arial','font-size':'30px'});
		$('#q3').html('THAT ONE ↑').css({'font-family':'arial','font-size':'30px'});
		$('#q4').html('THIS ONE').css({'font-family':'arial','font-size':'40px'});
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvTen(){
		$('#q1,#q2,#q3,#q4').css({'font-size':'50px','font-family':'Patrick Hand SC, cursive;'});
		$('#leftMouseHere,#rightMouseHere,#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect,.sec,#tenOne,#tenTwo,#tenThree,#tenFour,#tenFive').remove();
		$('#questionText').html('10.');
		$('#titleText').html('WHICH ONE IS FOOD?').css({'font-size':'50px'});
		$('.qContainer').hide();
		$('#bottom').before('<div class="sec"><i class="fa fa-globe" aria-hidden="true" id="tenOne"></i></div><div class="sec"><img id="tenTwo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tooth_icon_001.svg/477px-Tooth_icon_001.svg.png" alt="teeth icon"></div><div class="sec"><i class="fa fa-eye" id="tenThree" aria-hidden="true"></i></div><div class="sec"><img id="tenFour" src="http://freeflaticons.com/wp-content/uploads/2014/10/chair-141466725248nkg.png" alt="chair icon"></div><div class="sec"><i id="tenFive" class="fa fa-pencil" aria-hidden="true"></i></div>')
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	function lvEnd(){
		$('body').append('<div id="win">YOU WON!!</div>')
	}
	function gameOver(){
		$('#gameOverScreen').show();
		$('#game').css({'overflow':'hidden'});
	}
	$('#againGameOver').click(function(){
		restart();
		//location.reload();
	});
	function checkForLives(){
		if (liveCount <= 0){
			gameOver();
		}
	}
	function loseLife(){
		liveCount--;
		$('#wrong').fadeIn( "slow" ).fadeOut( "slow" );;
	}
	$('#q1').click(function(){
		switch(level){
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				level++;
				roomLevel()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				loseLife();
				lvSeven()
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q2').click(function(){
		switch(level){
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				loseLife();
				lvSeven()
				break;
			case 9:
				level++;
				roomLevel();
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q3').click(function(){
		switch(level){
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				level++;
				roomLevel();
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				level++;
				roomLevel();
				break;
			case 7:
				loseLife();
				lvSeven()
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q4').click(function(){
		switch(level){
			case 1:
				level++;
				roomLevel();
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				level++;
				roomLevel();
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	
	$(document).on('click','#answerTo4',function(){
		level++;
		roomLevel();
	});
	
	$(document).on('mouseenter','#rightMouseHere',function(){
		$(this).html('GO');
		$('#titleText').html('NOW, DON\'T TOUCH THE BLUE!');
		$('#game').css({'background-color':'deepskyblue'});
		if ($('#leftMouseHere').length){
			return false;
		} else {
			$('#bottom').before('<div id="leftMouseHere">Next Question</div>');
		}
		cantTouch = true;
	});
	$('#game').mouseover(function(){
		if (cantTouch == true){
			if ($('#rightMouseHere').is(':hover')) {
				return false;
			} else if ($('#leftMouseHere').is(':hover')) {
				level++;
				roomLevel();
				return false;
			} loseLife();
			lvFive()
			cantTouch = false;
		}
	});
	$(document).on('mouseenter','#leftMouseHere',function(){
		
	});
	$(document).on('click','#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6',function(){
		loseLife();
		lvEight();
	});
	$(document).on('click','#hiddenCorrect',function(){
		level++;
		roomLevel();
	});
	$(document).on('click','#tenTwo',function(){
		level++;
		skips++;
		noSkips--;
		lvTen();
		roomLevel();
	});
	$(document).on('click','#tenOne,#tenThree,#tenFour,#tenFive',function(){
		loseLife()
		lvTen();
	});
});
