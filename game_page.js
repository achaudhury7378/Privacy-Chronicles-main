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


String.prototype.format = function () {
	var i = 0, args = arguments;
	return this.replace(/{}/g, function () {
		return typeof args[i] != 'undefined' ? args[i++] : '';
	});
	};

	var qnas=[
		[ 'Question', 'Option 1', 'Option 2' ],
		[
		  'Hey kid what is your name',
		  'No I dont want to talk with you',
		  'My name is {}'.format(Player1_name)
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
	  
function send() {
	console.log(qnas.length)
	question_num = question_num + 1;
	if (question_num <= qnas.length-1){
	var input_box = '<div style="float:left;"><img src="kid-avatar.png" alt="Trulli" width="50" height="50"/><div id="question">';

	input_box += '<input type="radio" name="num" value={} onclick="check()"/><label for={}>{}</label>'.format(qnas[question_num][1],qnas[question_num][1],qnas[question_num][1]);
	input_box += '<input type="radio" name="num" value={} onclick="check()"/><label for={}>{}</label>'.format(qnas[question_num][2],qnas[question_num][2],qnas[question_num][2]);
	
	input_box = input_box + "</div></div>"
    question_number = '<div style="float:right;"><div id=qdesign>' + qnas[question_num][0] +'</div><img src="sus-guy.png" alt="Trulli" width="50" height="50"/></div>';
    row =  question_number +'<br>'+ input_box; 
	console.log(row)
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
	if(get_answer == "No")	
	{
		player1_status = "Won";
		end_game(player1_status)
	}
	else
	{
		player1_status = 'Lose';
		send()
	}
}
//end of the code