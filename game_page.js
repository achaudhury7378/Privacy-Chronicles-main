function add_user(){
    player_1_name = document.getElementById('player_1').value;
    localStorage.setItem('Player 1 name', player_1_name);
    window.location.replace('s.html')
}
function end_game(status){
	console.log("Player Status")
	localStorage.setItem('Player 1 Status', status);
	window.location.href = 'end.html'
}
Player1_name = localStorage.getItem("Player 1 name");
var player1_status = 'Lose';
question_num = 0;

// const fs = import('fs')
var qnas=[
	[ 'Question', 'Option 1', 'Option 2' ],
	[
	  'Hey kid what is your name',
	  'No I dont want to talk with you',
	  'My name is Player.name'
	],
	[
	  'Where Do you live',
	  'No I dont want to talk with you',
	  'I live at Player.Place'
	],
	[
	  'What types of game you play',
	  'No I dont want to talk with you',
	  'I play Player.Games'
	],
	[
	  'Can you show me the games',
	  'No I dont want to talk with you',
	  'Yes let me share'
	]
  ]
// fs.readFile('qdata_1.txt', (err, data) => {
//     if (err) throw err;

//   var qna=data.toString().split("\n");
  
//   for(i=0;i<5;i++){
//     qnas.push(qna[i].split("\t").slice(0,3))
//   }
//   // return qnas
//   console.log(qnas[0]);
// })
String.prototype.format = function () {
	var i = 0, args = arguments;
	return this.replace(/{}/g, function () {
		return typeof args[i] != 'undefined' ? args[i++] : '';
	});
	};

function send() {
	console.log(qnas.length)
	question_num = question_num + 1;
	if (question_num <= qnas.length-1){
	var input_box = '<fieldset><div class="some-class">';

	input_box += '<input type="radio" name="num" value={} onclick="check()"/><label for="10">{}</label><br>'.format(qnas[question_num][1],qnas[question_num][1]);
	input_box += '<input type="radio" name="num" value={} onclick="check()"/><label for="10">{}</label><br>'.format(qnas[question_num][2],qnas[question_num][2]);
	
	input_box = input_box +  "</div></fieldset>"
    question_number = "<h4>" + qnas[question_num][0] +"</h4>";
    row =  question_number + input_box; 
    document.getElementById("output").innerHTML = row;

	}
	else if(question_num == qnas.length){
		player1_status = 'Lose';
		end_game(player1_status)
	}
}
function check()
{	
	get_answer = document.querySelector('input[name="num"]:checked').value
	console.log(get_answer)
	// console.log("Timer")
	if(get_answer == "No")	
	{
			player1_status = "Won";
		    // document.getElementById("player1_score").innerHTML = player1_score;
			end_game(player1_status)
	}
	else
	{
		player1_status = 'Lose';
		send()
	}
}