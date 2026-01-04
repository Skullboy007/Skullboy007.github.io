$(document).ready(function () {
		// --- Auto-resize text to fit fixed answer boxes ---
	function fitText($el, maxSize, minSize){
		$el.css('font-size', maxSize + 'px');

		while (
			($el[0].scrollHeight > $el.innerHeight() ||
			 $el[0].scrollWidth  > $el.innerWidth()) &&
			parseInt($el.css('font-size')) > minSize
		){
			$el.css('font-size', (parseInt($el.css('font-size')) - 1) + 'px');
		}
	}

	// --- SFX (requires <audio id="sfxClick"> etc. in index.html) ---
	function playSFX(id){
		var a = document.getElementById(id);
		if (!a) return;
		try{
			a.currentTime = 0;
			a.play();
		}catch(e){}
	}
	function sfxClick(){ playSFX('sfxClick'); }
	function sfxCorrect(){ playSFX('sfxCorrect'); }
	function sfxWrong(){ playSFX('sfxWrong'); }
	function sfxGameOver(){ playSFX('sfxGameOver'); }

	// --- GAME STATE ---
	var level = 1;        // 1-based question number
	var liveCount = 3;

	// (Optional: keep these if you later add skips)
	var noSkips = 7;
	var skips = 0;

	// --- QUESTIONS (only 5 for now) ---
	// correct: number OR array of numbers (1..4)
	// next: optional jump target question number (1-based)
	var questions = [
		{
			title: "What do you hear at a silent comedy club?",
			answers: [
				{ text: "Go to 24",},
				{ text: "Nope", correct: true },
				{ text: "Canned Laughter" },
				{ text: "Tennis Elbow" }
			]
		},
		{
			title: "Ok, who just stole 10 wallets?",
			answers: [
				{ text: "Quirky Andrei", correct: true },
				{ text: "Fat Andrei", correct: true },
				{ text: "Hacker Andrei", correct: true },
				{ text: "Nobody" }
			]
		},
		{
			title: "Why is the police station so empty?",
			answers: [
				{ text: "They all broke out" },
				{ text: "Help there's a giant rabbit" },
				{ text: "The officials got bribed", correct: true },
				{ text: "Don't you mean the prison?" }
			]
		},
		{
			title: "What do you call a super vegetable?",
			answers: [
				{ text: "A-Corn", correct: true },
				{ text: "A scam" },
				{ text: "Pump-King" },
				{ text: "Dish Soap" }
			]
		},
		{
			title: "What's the mass of Fat Andrei?",
			answers: [
				{ text: "6 Semi-trucks" },
				{ text: "5000 Eggplants" },
				{ text: "120 Boulders" },
				{ text: "naneinf", correct: true }
			]
		}
	];

	// --- UI HELPERS ---
	function renderSkips(){
		$('#skips').html(
			'<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) +
			'<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips)
		);
	}

	function checkForLives(){
		if (liveCount <= 0){
			gameOver();
		}
	}

	function loseLife(){
		liveCount--;
		sfxWrong();
		$('#wrong').fadeIn("slow").fadeOut("slow");
		$('#liveText').html(liveCount);
		checkForLives();
	}

	function gameOver(){
		sfxGameOver();
		$('#gameOverScreen').show();
		$('#game').css({'overflow':'hidden'});
	}

	function win(){
		$('body').append('<div id="win">YOU WON!!</div>');
	}

	function restart(){
		$('#gameOverScreen').hide();
		$('#win').remove();

		// reset styles that may have been changed by other “trick” questions later
		$('#q1,#q2,#q3,#q4').css({'font-size':'50px','font-family':'Patrick Hand SC, cursive','color':'black'});
		$('#titleText').css({'font-size':'60px'});
		$('#game').css({'overflow':'visible','background':'transparent'});

		level = 1;
		liveCount = 3;
		noSkips = 7;
		skips = 0;

		loadLevel();
	}

	$('#againGameOver').click(function(){
		sfxClick();
		restart();
	});

	// --- CORE: LOAD A QUESTION ---
		function loadLevel(){
		$('#liveText').html(liveCount);
		renderSkips();

		if (level > questions.length){
			win();
			return;
		}

		var q = questions[level - 1];

		$('#questionText').html(level + '.');
		$('#titleText').html(q.title);

		$('#q1').html(q.answers[0].text);
		$('#q2').html(q.answers[1].text);
		$('#q3').html(q.answers[2].text);
		$('#q4').html(q.answers[3].text);

		fitText($('#q1'), 50, 18);
		fitText($('#q2'), 50, 18);
		fitText($('#q3'), 50, 18);
		fitText($('#q4'), 50, 18);

		checkForLives();
	}


	// --- HANDLE ANSWER CLICK ---
	function onAnswer(choiceIndex){ // 1..4
		sfxClick();

		// already dead
		if (liveCount <= 0) return;

		var q = questions[level - 1];
		var a = q.answers[choiceIndex - 1];

		// Jump logic (e.g., "Go to 24")
		if (a.next != null){
			// Only jump if that question exists for now, otherwise treat as wrong
			if (a.next >= 1 && a.next <= questions.length){
				sfxCorrect();
				level = a.next;
				loadLevel();
				return;
			} else {
				loseLife();
				loadLevel();
				return;
			}
		}

		// Correct logic
		if (a.correct === true){
			sfxCorrect();
			level++;
			loadLevel();
		} else {
			loseLife();
			loadLevel();
		}
	}

	// --- CLICK BINDINGS (same IDs as your original HTML) ---
	$('#q1').click(function(){ onAnswer(1); });
	$('#q2').click(function(){ onAnswer(2); });
	$('#q3').click(function(){ onAnswer(3); });
	$('#q4').click(function(){ onAnswer(4); });

	// Start game
	loadLevel();
});
