// wait for the DOM to finish loading
//clear board button
$(document).ready(function() {
	$('.btn').click(function clearBoard(){
		$('.box').empty();
		$('.box').removeClass('oColor');
		$('.box').removeClass('xColor');
		turn = 1;
		moveCount= 0;

	});

var playerX = "x";
var playerO = "o";
var turn = 1;
var moveCount = 0;

// click to play
$('.box').on("click", function userInput(){
if($(this).text()=== "") {
	if(turn===1) {
		$(this).text(playerX);
		$(this).addClass('xColor');
		turn =2 ;
	} else if (turn===2) {
		$(this).text(playerO);
		$(this).addClass('oColor');
		turn =1 ;
	}
	moveCount++;
	checkWin();
	console.log(moveCount);
} else {
	alert('That box is already taken!');
}
});


//board layout with div class
var checkWin = function () {
var topL = $('#1').text();
var topM = $('#2').text();
var topR = $('#3').text();
var midL = $('#4').text();
var midM = $('#5').text();
var midR = $('#6').text();
var botL = $('#7').text();
var botM = $('#8').text();
var botR = $('#9').text();

var xWins = 0;
var oWins = 0;

//board layout and winning combos!
	var winCombo= [[topL, topM, topR], //rows
						[midL, midM, midR],
						[botL, botM, botR],
						[topL, midM, botR], //diagonal
						[topR, midM, botL],
						[topL, midL, botL],//columns
						[topM, midM, botM],
						[topR, midR, botR]];
	for ( var i = 0; i< winCombo.length; i++) {
		if (winCombo[i][0] !== "") {
			if (winCombo[i][0]===winCombo[i][1] && winCombo[i][1]===winCombo[i][2]) {
				if (winCombo[i][0] === "x") {
					xWins ++;
					alert('X wins!');
				} else {
			 if (winCombo[i][0] === "o"){
					oWins ++;
					alert('O wins!');
				}else{
					alert('it is a draw!');
				}
				}
				}
			}
		}




};


 });
