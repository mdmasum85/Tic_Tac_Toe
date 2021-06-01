
  // created by Masum
const front= document.querySelector('.front');
const button7= document.querySelector('.button7');
const p1= document.querySelector('.player1');
const p2= document.querySelector('.player2');
const btn_btn= document.querySelector('.btn_btn');
const choose_game_play= document.querySelector('.choose_game_play');



button7.onclick =()=>{
  button7.style.display = "none";
  btn_btn.style.display = "block";
};
p2.onclick = ()=> {
  location.href = "choose.html";
 
};
p1.onclick = ()=> {
  location.href = "computer.html";
  computerFun();
};
