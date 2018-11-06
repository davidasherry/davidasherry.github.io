// LYRICS
var songs = [
{ lyric: "When I get older I will be stronger,<br> they'll call me freedom just like a waving", answer: "flag"},
{ lyric: "We all live in a yellow submarine,<br> a yellow submarine,<br> a yellow ", answer: "submarine"},
{ lyric: "Carry on my Wayward son,<br> they'll be peace when you are done,<br> lay your weary head to,<br> don't you cry no", answer: "more"}, 
{ lyric: "If I could walk 500 miles,<br> than I would walk 500", answer: "more"},
{ lyric: "Hey I just met you, and this is crazy<br> but here's my number, call me ", answer: "maybe"},
{ lyric: "Just a city boy,<br> born and raised in South Detroit,<br> he took the midnight train going", answer: "anywhere"},
{ lyric: "It's the eye of the tiger,<br> it's the thrill of the fight,<br> Risin' up to the challenge of our", answer: "rivals"},
{ lyric: "Sweet home Alabama<br> Where the skies are so blue<br> Sweet home Alabama<br> Lord, I'm coming home to", answer: "you"},
{ lyric: "It's been a long day,<br> without you my friend,<br> and I'll tell you all about it when I see you", answer: "again"},
{ lyric: "It's fun to stay at the Y.M.C.A<br>It's fun to stay at the Y.M.C.A<br>They have everything for you men to enjoy<br>You can hang out with all the ", answer: "boys"},
{ lyric: "It's not unusual to be loved by anyone<br>It's not unusual to have fun with anyone<br>But when I see you hanging about with anyone<br>It's not unusual to see me cry, I wanna ", answer: "die"},
{ lyric: "Oh yeah baby, like a fool I went and stayed too long<br>Now I'm wondering if your love's still strong<br>Oo baby, here I am, signed, sealed delivered, I'm ", answer: "yours"},
{ lyric: "His palms are sweaty, knees weak, arms are heavy<br> There's vomit on his sweater already, mom's", answer: "spaghetti"}
];



// GLOBAL VARIABLES
var button = document.querySelector("#submit");
var input = document.querySelector("#input");
var index = Math.floor(Math.random() * songs.length);
var answer = songs[index].answer;
var lyrics = document.querySelector("#lyrics");
	lyrics = document.querySelector("#lyrics").innerHTML = songs[index].lyric;
var start = document.querySelector("#start");
var timer = document.querySelector("#watchTest");
var progress = document.querySelector("#progress");
var hiscore = [];
var score = 0;
var totalScore = document.querySelector("#totalScore");
var attempts = 0;
var totalAttempts = document.querySelector("#attempts");
var r = 0;
var round = document.querySelector("#round");
var sec = 30;
document.querySelector("#time").innerHTML =  sec;
var skip = document.querySelector("#skip");

//START
function startGame() {
	var intro = document.querySelector("#intro");
	var container = document.querySelector("#container");

	if (container.style.display === "none") {
		intro.style.display = "none";
		container.style.display = "block";
    } else {
    	intro.style.display = "none";
    	container.style.display = "block";
    }
}



//BASE
function myFunction() {
	var form = document.querySelector("#input").value;
	var guess = form.toLowerCase();
	let i = Math.floor(Math.random() * songs.length);

	if (guess == answer) {
		demo = document.querySelector("#demoLyric").innerHTML = "That is Correct!";
    	score++;
    	totalScore.innerHTML = score;
    	lyrics = document.querySelector("#lyrics").innerHTML = songs[i].lyric;
    	answer = songs[i].answer;
	} else if (guess.length == 0){
		demo = document.querySelector("#demoLyric").innerHTML = "Please Enter Something...";
	} else  {
		demo = document.querySelector("#demoLyric").innerHTML = "Try Again.";
		score--;
    	totalScore.innerHTML = score;
    	attempts++;
    	totalAttempts.innerHTML = attempts;
	} 
	document.getElementById("formLyric").reset();
}

function skipped(){
	let i = Math.floor(Math.random() * songs.length);
	demo = document.querySelector("#demoLyric").innerHTML = "Skipped!";
	lyrics = document.querySelector("#lyrics").innerHTML = songs[i].lyric;
	answer = songs[i].answer;
}


//GAMEOVER
function gameOver(){
	alert("Game Over." + "Total Score: " + score);
    hiscore.push(score);
    hiscore.sort(function(a, b){return b - a});
    var previous = document.querySelector("#previous");
    previous.innerHTML = hiscore;
    intro.style.display = "flex";
    container.style.display = "none";
    attempts = 0;
    totalAttempts.innerHTML = attempts;
    score = 0;
    totalScore.innerHTML = score;
    r++;
    round.innerHTML = r;
}



function pressEnter(e) {
	if(e.keyCode === 13){
		myFunction();

	}
}



//TIMER
function countdown(){
	var ms = 1;
	var s = sec;
	var timer = document.querySelector("#watchTest");
	var interval = setInterval(sub, 10);

	function sub() {
		ms--;
		if(ms == 0){
			s--;
			ms = 99;
		} 
		if((s == 0) && (ms <= 1)){
			gameOver();
			clearInterval(interval);
			return;
		} 
		work(s,sec);

	timer.innerHTML = s + ":" + ms;
	} 
}



//CHANGE COLOUR
function work(x,y){
		  if (x > (y *.5)){
		  	timer.style.color = "white";
		} if (x < (y *.5)){
			timer.style.color = "yellow";
		} if (x < (y *.2)){
			timer.style.color = "orange";
		} if (x < (y *.1) ){
			timer.style.color = "red";
	} 
}


skip.addEventListener("click", skipped);
start.addEventListener("click", startGame);
input.addEventListener("keypress", pressEnter);
button.addEventListener("click", myFunction);
start.addEventListener("click", countdown);
input.addEventListener("keypress", pressEnter);
// start.addEventListener("click", action);



// PROGRESS BAR

// function action() {
// 	var width = 0;
// 	var int = 10;
// 	var interval = setInterval(animate, int);

// 	function animate() {
// 		if (width >= 100) {
// 			clearInterval(interval); 
// 			progress.style.width = 0 + "%";
// 			return;
// 		} else {
// 			width+= int/600; /*600 represents a minute */
// 			progress.style.width = width + "%";
// 		}
// 			  if (width < 50){
// 			  	progress.style.backgroundColor = "white";
// 			} if (width > 50){
// 			progress.style.backgroundColor = "yellow";
// 			} if (width > 80){
// 				progress.style.backgroundColor = "orange";
// 			} if (width > 90){
// 				progress.style.backgroundColor = "red";
// 			}
// 	}
// }