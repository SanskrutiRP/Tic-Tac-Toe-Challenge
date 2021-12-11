//////////////////////////////////////////////////////////////////////////////////
/*							Tic Tac Toe Logic									*/
//////////////////////////////////////////////////////////////////////////////////

//
//Get the name of the player
let name = prompt("Your name");
document.getElementById("name").innerText = name;
//

//

document.getElementById('rules').addEventListener('click', ()=>{
	document.querySelectorAll(".rules")[0].style.display='flex';
});

//

//
document.getElementById("close").addEventListener('click', ()=>{
	document.querySelectorAll(".rules")[0].style.display='none';
});
//
//get board element from document
let board = document.querySelectorAll('.board')[0];

//function to display board 
function buildBoard(){
	if(board.innerHTML == '')
		for(let i = 1; i <= 9; i++ ){
			let block = document.createElement('div');
			block.classList.add('block');
			block.setAttribute('id', i);
			board.appendChild(block);
		}
}
buildBoard();

//logic of the game
let turn  = 0;
let won = document.getElementById('winner');
let windiv = document.querySelectorAll('.winner')[0];
let blocks = board.querySelectorAll('.block');
//check whether the player won or not
function checkWin(par){
	if( (blocks[0].getAttribute('id') == par && blocks[1].getAttribute('id') == par && blocks[2].getAttribute('id') == par)||
		(blocks[3].getAttribute('id') == par && blocks[4].getAttribute('id') == par && blocks[5].getAttribute('id') == par)||
		(blocks[6].getAttribute('id') == par && blocks[7].getAttribute('id') == par && blocks[8].getAttribute('id') == par)||
		(blocks[0].getAttribute('id') == par && blocks[3].getAttribute('id') == par && blocks[6].getAttribute('id') == par)||
		(blocks[1].getAttribute('id') == par && blocks[4].getAttribute('id') == par && blocks[7].getAttribute('id') == par)||
		(blocks[2].getAttribute('id') == par && blocks[5].getAttribute('id') == par && blocks[8].getAttribute('id') == par)||
		(blocks[0].getAttribute('id') == par && blocks[4].getAttribute('id') == par && blocks[8].getAttribute('id') == par)||
		(blocks[2].getAttribute('id') == par && blocks[4].getAttribute('id') == par && blocks[6].getAttribute('id') == par)
		)
		return 1;
}

let turnof = document.getElementById('turn');
let count = 0, flag = 0;
//add O or X as per click
function addListener(){

	//fetch all the blocks from board
	blocks = board.querySelectorAll('.block');

	//for each block add click event listener
	blocks.forEach((ele)=>{
		ele.addEventListener('click', ()=>{

			//if its Os turn add O to block
			if(turn == 0 && ele.innerHTML == ""){
				ele.innerHTML = `<img src="player.png">`;
				ele.setAttribute('id', 'O');
				turnof.innerText = "Computers turn";
				if(checkWin('O')){
					board.innerHTML='';
					windiv.style.display="flex";
					won.innerText =  `${name} won`;
					turnof.innerText = "";
					flag =1;
				}
				turn = 1;
				count++;
			}
			//if its Xs turn add X to block
			if(turn == 1 && ele.innerHTML == ""){
				ele.innerHTML = `<img src="computer.png">`;
				ele.setAttribute('id', 'X');
				turnof.innerText = `${name} turn`;
				if(checkWin('X')){
					board.innerHTML='';
					windiv.style.display="flex";
					won.innerText ="Computer won";
					turnof.innerText = "";
					flag = 1;
				}
				turn = 0;
				count++;
			}
			console.log(count);
			if(count == 9 && flag == 0){
				board.innerHTML='';
				windiv.style.display="flex";
				turnof.innerText = "";
				won.innerText = "Tie";
			}
		});
	});
}
addListener();

document.getElementById('play').addEventListener('click', ()=> {
	count = 0;
	flag = 0;
	turn = 0;
	board.innerHTML='';
	won.innerText = '';
	windiv.style.display = "none";
	buildBoard();
	addListener();
});
