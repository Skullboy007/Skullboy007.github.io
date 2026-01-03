document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle
  const menu = document.getElementById("menu");
  const game = document.getElementById("game");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
    game.classList.remove("hidden");
  });

  // Helpers (mini jQuery replacements)
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const setHTML = (sel, html) => { $(sel).innerHTML = html; };
  const setStyle = (sel, styles) => Object.assign($(sel).style, styles);
  const show = (sel) => { $(sel).style.display = "block"; };
  const hide = (sel) => { $(sel).style.display = "none"; };
  const removeEl = (sel) => { $$(sel).forEach(el => el.remove()); };

  const q1 = $("#q1"), q2 = $("#q2"), q3 = $("#q3"), q4 = $("#q4");

  let level = 1;
  let liveCount = 3;
  let noSkips = 7;
  let skips = 0;
  let cantTouch = false;

  function roomLevel(){
    switch(level){
      case 1: lvOne(); break;
      case 2: lvTwo(); break;
      case 3: lvThree(); break;
      case 4: lvFour(); break;
      case 5: lvFive(); break;
      case 6: lvSix(); break;
      case 7: lvSeven(); break;
      case 8: lvEight(); break;
      case 9: lvNine(); break;
      case 10: lvTen(); break;
      case 11: lvEnd(); break;
      default: alert("Error. Refresh page");
    }
  }

  function checkForLives(){
    if (liveCount <= 0) gameOver();
  }

  function renderSkips(){
    const used = '<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips);
    const left = '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips);
    $("#skips").innerHTML = used + left;
  }

  function loseLife(){
    liveCount--;
    $("#liveText").textContent = liveCount;

    const wrong = $("#wrong");
    wrong.style.display = "block";
    wrong.style.opacity = "1";

    setTimeout(() => { wrong.style.opacity = "0"; }, 450);
    setTimeout(() => { wrong.style.display = "none"; wrong.style.opacity = "1"; }, 900);
  }

  function gameOver(){
    show("#gameOverScreen");
    setStyle("#game", { overflow: "hidden" });
  }

  function restart(){
    // reset answer styles
    [q1,q2,q3,q4].forEach(q => {
      q.style.fontSize = "50px";
      q.style.fontFamily = "Patrick Hand SC, cursive";
      q.style.color = "black";
    });

    hide("#gameOverScreen");
    removeEl("#leftMouseHere,#rightMouseHere,#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect,.sec,#tenOne,#tenTwo,#tenThree,#tenFour,#tenFive");

    $$(".Qs,.qContainer").forEach(el => el.style.display = "inline-block");
    // qContainer are blocks; restore
    $$(".qContainer").forEach(el => el.style.display = "block");

    level = 1;
    liveCount = 3;
    noSkips = 7;
    skips = 0;
    cantTouch = false;

    roomLevel();
  }

  // ===== Levels =====
  function baseHUD(){
    $("#liveText").textContent = liveCount;
    renderSkips();
    checkForLives();
  }

  function lvOne(){
    setHTML("#questionText", "1.");
    setHTML("#titleText", "HOW MANY HOLES IN A POLO?");
    setHTML("#q1", "ONE");
    setHTML("#q2", "TWO");
    setHTML("#q3", "THREE");
    setHTML("#q4", "FOUR");
    baseHUD();
  }

  function lvTwo(){
    setHTML("#questionText", "2.");
    setHTML("#titleText", "CAN A MATCH BOX?");
    setHTML("#q1", "YES");
    setHTML("#q2", "NO");
    setHTML("#q3", "NO, BUT A TIN CAN"); setStyle("#q3", { fontSize: "30px" });
    setHTML("#q4", "YES, ONE BEAT MIKE TYSON"); setStyle("#q4", { fontSize: "29px" });
    baseHUD();
  }

  function lvThree(){
    setHTML("#questionText", "3.");
    setHTML("#titleText", ".SDRAWKCAB NOITSEUQ SIHT REWSNA");
    setStyle("#titleText", { fontSize: "50px" });
    setHTML("#q1", "K.O");
    setHTML("#q2", "WHAT?");
    setHTML("#q3", "I DON'T UNDERSTAND"); setStyle("#q3", { fontSize: "29px" });
    setHTML("#q4", "TENNIS ELBOW"); setStyle("#q4", { fontSize: "40px" });
    baseHUD();
  }

  function lvFour(){
    setHTML("#questionText", "4.");
    setHTML("#titleText", 'CLICK <span id="answerTo4">THE ANSWER</span>');
    setStyle("#titleText", { fontSize: "60px" });

    ["#q1","#q2","#q3","#q4"].forEach(id => {
      setHTML(id, "OUT OF ORDER");
      setStyle(id, { fontSize: "30px", color: "red" });
    });

    baseHUD();
  }

  function lvFive(){
    removeEl("#leftMouseHere,#rightMouseHere");
    setHTML("#questionText", "5.");
    setHTML("#titleText", "PUT THE MOUSE......<br/> ..... ON HERE");

    const right = document.createElement("div");
    right.id = "rightMouseHere";
    right.textContent = "Here";
    $("#bottom").before(right);

    setStyle("#game", { overflow: "hidden", background: "white" });
    $$(".qContainer").forEach(el => el.style.display = "none");

    baseHUD();
  }

  function lvSix(){
    $$(".qContainer").forEach(el => el.style.display = "block");
    removeEl("#leftMouseHere,#rightMouseHere");
    setStyle("#game", { overflow: "visible", background: "white" });

    setHTML("#questionText", "6.");
    setHTML("#titleText", "√ONION");

    setHTML("#q1", "28"); setStyle("#q1", { fontSize: "50px", color: "black" });
    setHTML("#q2", "CARROT"); setStyle("#q2", { fontSize: "50px", color: "black" });
    setHTML("#q3", "SHALLOTS"); setStyle("#q3", { fontSize: "50px", color: "black" });
    setHTML("#q4", "π"); setStyle("#q4", { fontSize: "50px", color: "black" });

    baseHUD();
  }

  function lvSeven(){
    setHTML("#questionText", "7.");
    setHTML("#titleText", "THE ANSWER IS REALLY BIG");
    setHTML("#q1", "ANSWER");
    setHTML("#q2", "REALLY BIG");
    setHTML("#q3", "∞");
    setHTML("#q4", "AN ELEPHANT"); setStyle("#q4", { fontSize: "40px" });
    baseHUD();
  }

  function lvEight(){
    removeEl("#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect");
    setHTML("#questionText", "8.");
    setHTML("#titleText", "SEARCH!");
    $$(".qContainer").forEach(el => el.style.display = "none");

    $("#bottom").insertAdjacentHTML("beforebegin",
      '<div id="notThis1">Nope</div><div id="notThis2">No</div><div id="notThis3">Keep looking</div><div id="notThis4">Try again</div><div id="notThis5">:(</div><div id="notThis6">X</div><div id="hiddenCorrect"><i class="fa fa-check" aria-hidden="true"></i></div>'
    );

    baseHUD();
  }

  function lvNine(){
    $$(".qContainer").forEach(el => el.style.display = "block");
    ["#notThis1","#notThis2","#notThis3","#notThis4","#notThis5","#notThis6","#hiddenCorrect"].forEach(id => {
      const el = $(id); if (el) el.style.display = "none";
    });

    setHTML("#questionText", "9.");
    setHTML("#titleText", "WHAT WAS THE ANSWER TO QUESTION 2?");
    setStyle("#titleText", { fontSize: "50px" });

    setHTML("#q1", "THAT ONE →"); setStyle("#q1", { fontFamily: "arial", fontSize: "30px" });
    setHTML("#q2", "THAT ONE ↙"); setStyle("#q2", { fontFamily: "arial", fontSize: "30px" });
    setHTML("#q3", "THAT ONE ↑"); setStyle("#q3", { fontFamily: "arial", fontSize: "30px" });
    setHTML("#q4", "THIS ONE"); setStyle("#q4", { fontFamily: "arial", fontSize: "40px" });

    baseHUD();
  }

  function lvTen(){
    [q1,q2,q3,q4].forEach(q => {
      q.style.fontSize = "50px";
      q.style.fontFamily = "Patrick Hand SC, cursive";
      q.style.color = "black";
    });

    removeEl("#leftMouseHere,#rightMouseHere,#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect,.sec,#tenOne,#tenTwo,#tenThree,#tenFour,#tenFive");

    setHTML("#questionText", "10.");
    setHTML("#titleText", "WHICH ONE IS FOOD?");
    setStyle("#titleText", { fontSize: "50px" });

    $$(".qContainer").forEach(el => el.style.display = "none");

    $("#bottom").insertAdjacentHTML("beforebegin",
      `<div class="sec"><i class="fa fa-globe" aria-hidden="true" id="tenOne"></i></div>
       <div class="sec"><img id="tenTwo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tooth_icon_001.svg/477px-Tooth_icon_001.svg.png" alt="teeth icon"></div>
       <div class="sec"><i class="fa fa-eye" id="tenThree" aria-hidden="true"></i></div>
       <div class="sec"><img id="tenFour" src="https://freepngimg.com/thumb/chair/10-2-chair-png-file.png" alt="chair icon"></div>
       <div class="sec"><i id="tenFive" class="fa fa-pencil" aria-hidden="true"></i></div>`
    );

    baseHUD();
  }

  function lvEnd(){
    const win = document.createElement("div");
    win.id = "win";
    win.textContent = "YOU WON!!";
    document.body.appendChild(win);
  }

  // ===== Event wiring =====
  $("#againGameOver").addEventListener("click", restart);

  q1.addEventListener("click", () => {
    switch(level){
      case 3: level++; roomLevel(); break;
      case 1: case 2: case 4: case 6: case 7: case 9:
        loseLife(); roomLevel(); break;
      default: alert("Error. Refresh page");
    }
  });

  q2.addEventListener("click", () => {
    switch(level){
      case 9: level++; roomLevel(); break;
      case 1: case 2: case 3: case 4: case 6: case 7:
        loseLife(); roomLevel(); break;
      default: alert("Error. Refresh page");
    }
  });

  q3.addEventListener("click", () => {
    switch(level){
      case 2: level++; roomLevel(); break;
      case 6: level++; roomLevel(); break;
      case 1: case 3: case 4: case 7: case 9:
        loseLife(); roomLevel(); break;
      default: alert("Error. Refresh page");
    }
  });

  q4.addEventListener("click", () => {
    switch(level){
      case 1: level++; roomLevel(); break;
      case 7: level++; roomLevel(); break;
      case 2: case 3: case 4: case 6: case 9:
        loseLife(); roomLevel(); break;
      default: alert("Error. Refresh page");
    }
  });

  // delegated events for dynamic elements
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "answerTo4") {
      level++; roomLevel();
    }

    if (e.target && ["notThis1","notThis2","notThis3","notThis4","notThis5","notThis6"].includes(e.target.id)) {
      loseLife(); lvEight();
    }

    if (e.target && e.target.id === "hiddenCorrect") {
      level++; roomLevel();
    }

    if (e.target && e.target.id === "tenTwo") {
      level++;
      skips++;
      noSkips--;
      lvTen();
      roomLevel();
    }

    if (e.target && ["tenOne","tenThree","tenFour","tenFive"].includes(e.target.id)) {
      loseLife();
      lvTen();
    }
  });

  // mouse puzzle (level 5)
  document.addEventListener("mouseenter", (e) => {
    if (e.target && e.target.id === "rightMouseHere") {
      e.target.textContent = "GO";
      setHTML("#titleText", "NOW, DON'T TOUCH THE BLUE!");
      setStyle("#game", { backgroundColor: "deepskyblue" });

      if (!$("#leftMouseHere")) {
        const left = document.createElement("div");
        left.id = "leftMouseHere";
        left.textContent = "Next Question";
        $("#bottom").before(left);
      }
      cantTouch = true;
    }
  }, true);

  $("#game").addEventListener("mouseover", () => {
    if (!cantTouch) return;

    const right = $("#rightMouseHere");
    const left = $("#leftMouseHere");
    if (right && right.matches(":hover")) return;
    if (left && left.matches(":hover")) { level++; roomLevel(); return; }

    loseLife();
    lvFive();
    cantTouch = false;
  });

  // start at level 1 when game is shown (optional: you can auto-init)
  roomLevel();
});
