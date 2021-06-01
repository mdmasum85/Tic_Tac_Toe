
const agian_btn = document.querySelector('.agian_btn');
const again_main = document.querySelector('.again_main');
const color = document.querySelector('#color');
const slider = document.querySelector('.slider');
const crose1 = document.querySelector('.crose1');
const showName1 = document.querySelector('.showName1');
const showName2 = document.querySelector('.showName2');
const quiet_btn = document.querySelector('.quiet_btn');

const show_player = document.querySelector('.result_section h1 .show_player');
const result_section = document.querySelector('.result_section');
const choose_box_style = document.querySelector('.choose_box_style');
const p2 = document.querySelector('.p2');
const p1 = document.querySelector('.p1');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const allBox = document.querySelectorAll('section span');
const playsection = document.querySelector('.playsection');
const allh3 = document.querySelectorAll("section span h3");
const allh4 = document.querySelector("section span h4");
const player1_input = document.querySelector(".player1_input");
const player2_input = document.querySelector(".player2_input");
const one_style = document.querySelector(".one_style");
const two_style = document.querySelector(".two_style");
const submit_1 = document.querySelector(".submit_1");
const need_for = document.querySelector(".need_for");
// a global value
let for_style = false;
// for score
let t1 = 0;let t2 = 0;let t3 = 0;let t4 = 0;let t5 = 0;let t6 = 0;let t7 = 0;let t8 = 0;let t9 = 0;let m1 = 0;let m2 = 0;let m3 = 0;let m4 = 0;let m5 = 0;let m6 = 0;let m7 = 0;let m8 = 0;let m9 = 0;
// inserting icon
let computer_tag = `<h3 class="o_btn" >o</h3>`;
let player_tag = `<h3>&times;</h3>`;

 // chose box area
 two_style.onclick = ()=>{
   for_style = true;
 };
 one_style.onclick = ()=>{
   for_style = false;
 };
 // onsubmit form
submit_1.onclick = ()=>{
 let play_let1 = player1_input.value;
 let play_let2 = player2_input.value;
 // chooses style
 if (for_style == false) {
  p2.classList.remove("p2active");
 }
 if (for_style == true) {
  p2.classList.add("pactive");
 }
 setTimeout(function() {
  p1.textContent = play_let1;
  p2.textContent = play_let2;
  playsection.style.display = "block";
  choose_box_style.style.display = "none";
 }, 300);
};

 
 
//player area
// first function calling
player1(); 
function player1() {
  // all box onclick
  box1.onclick = ()=>{
    if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box1.innerHTML = player_tag ;
  box1.style.pointerEvents = "none";
  t1++;
  let_fun();
  player2();
};

box2.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box2.innerHTML = player_tag ;
  box2.style.pointerEvents = "none";
  t2++;
  let_fun();
  player2();
};

box3.onclick = ()=>{
  
  if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box3.innerHTML = player_tag ;
  box3.style.pointerEvents = "none";
  t3++;
  let_fun();
  player2();
};

box4.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box4.innerHTML = player_tag ;
  box4.style.pointerEvents = "none";
  t4++;
  let_fun();
  player2();
};

box5.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box5.innerHTML = player_tag ;
  box5.style.pointerEvents = "none";
  t5++;
  let_fun();
  player2();
};

box6.onclick = ()=>{
  if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box6.innerHTML = player_tag ;
  t6++;
  box6.style.pointerEvents = "none";
  let_fun();
  player2();
};

box7.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
 
  box7.innerHTML = player_tag ;
  t7++;
  box7.style.pointerEvents = "none";
  let_fun();
  player2();
};

box8.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box8.innerHTML = player_tag ;
  t8++;
  box8.style.pointerEvents = "none";
  let_fun();
  player2();
};

box9.onclick = ()=>{
   if (for_style == false) {
    slidep2();
    }
    if (for_style == true) {
    slidep3();
    }
  box9.innerHTML = player_tag ;
  t9++;
  box9.style.pointerEvents = "none";
  let_fun();
  player2();
};
}

// player 2 function
function player2() {
  box1.onclick = ()=>{
    slidep1();
  box1.innerHTML = computer_tag ;
  m1++;
  box1.style.pointerEvents = "none";
  let_fun2();
  player1();
};

box2.onclick = ()=>{
  slidep1();
  box2.innerHTML = computer_tag ;
  m2++;
  box2.style.pointerEvents = "none";
  let_fun2();
  player1();
};

box3.onclick = ()=>{
  slidep1();
  box3.innerHTML = computer_tag ;
  m3++;
  box3.style.pointerEvents = "none";
  let_fun2();
 player1();
};

box4.onclick = ()=>{
  slidep1();
  box4.innerHTML = computer_tag ;
  m4++;
  box4.style.pointerEvents = "none";
  let_fun2();
player1();
};
  
box5.onclick = ()=>{
  slidep1();
  box5.innerHTML = computer_tag ;
  m5++;
  box5.style.pointerEvents = "none";
  let_fun2();
  player1();
};
  
box6.onclick = ()=>{
  slidep1();
  box6.innerHTML = computer_tag ;
  m6++;
  box6.style.pointerEvents = "none";
  let_fun2();
  player1();
};
 
box7.onclick = ()=>{
  slidep1();
  box7.innerHTML = computer_tag ;
  m7++;
  box7.style.pointerEvents = "none";
  let_fun2();
  player1();
};
 
box8.onclick = ()=>{
  slidep1();
  box8.innerHTML = computer_tag ;
  m8++;
  box8.style.pointerEvents = "none";
  let_fun2();
  player1();
};
  
box9.onclick = ()=>{
  slidep1();
  box9.innerHTML = computer_tag ;
  m9++;
  box9.style.pointerEvents = "none";
  let_fun2();
  player1();
};
}
  

// all sliding animation
function slidep1() {
  slider.style.left = "0%";
  slider.style.top = "0%";
}
function slidep2() {
  slider.style.left = "58%";
  slider.style.top = "0%";
}
function slidep3() {
  slider.style.left = "58%";
  slider.style.top = "85%";
}

// score board 
function let_fun(){
    
  let total1= (t1 + t2 + t3);
  let total2= (t4 + t5 + t6);
  let total3= (t7 + t8 + t9);
  let total4= (t1 + t4 + t7);
  let total5= (t2 + t5 + t8);
  let total6= (t3 + t6 + t9);
  let total7= (t1 + t5 + t9);
  let total8= (t3 + t5 + t7);
  
  
  
  
  
    if (total1 ==3) {
     box1.style.background = "green";
     box2.style.background = "green";
     box3.style.background = "green";
  }
  if (total2 ==3) {
     box4.style.background = "green";
     box5.style.background = "green";
     box6.style.background = "green";
  }
  if (total3 ==3) {
     box7.style.background = "green";
     box8.style.background = "green";
     box9.style.background = "green";
  }
  if (total4 ==3) {
     box1.style.background = "green";
     box4.style.background = "green";
     box7.style.background = "green";
  }
  if (total5 ==3) {
     box2.style.background = "green";
     box5.style.background = "green";
     box8.style.background = "green";
  }
  if (total6 ==3) {
     box3.style.background = "green";
     box6.style.background = "green";
     box9.style.background = "green";
  }
  if (total7 ==3) {
     box1.style.background = "green";
     box5.style.background = "green";
     box9.style.background = "green";
  }
  if (total8 ==3) {
     box3.style.background = "green";
     box5.style.background = "green";
     box7.style.background = "green";
  }
  if ((total1 == 3) ||
  (total2 == 3) ||
  (total3 == 3) ||
  (total4 == 3) ||
  (total5 == 3) ||
  (total6 == 3) ||
  (total7 == 3) ||
  (total8 == 3))
  {
   playsection.style.pointerEvents = "none";
    setTimeout(function() {
   result_section.classList.add("active_result");
   playsection.style.display = "none";
   let p1text = p1.textContent;
   show_player.textContent = p1text;
    }, 800)
  }
}


 function let_fun2() {
  let total1= (m1 + m2 + m3);
  let total2= (m4 + m5 + m6);
  let total3= (m7 + m8 + m9);
  let total4= (m1 + m4 + m7);
  let total5= (m2 + m5 + m8);
  let total6= (m3 + m6 + m9);
  let total7= (m1 + m5 + m9);
  let total8= (m3 + m5 + m7);
  if (total1 ==3) {
     box1.style.background = "green";
     box2.style.background = "green";
     box3.style.background = "green";
  }
  if (total2 ==3) {
     box4.style.background = "green";
     box5.style.background = "green";
     box6.style.background = "green";
  }
  if (total3 ==3) {
     box7.style.background = "green";
     box8.style.background = "green";
     box9.style.background = "green";
  }
  if (total4 ==3) {
     box1.style.background = "green";
     box4.style.background = "green";
     box7.style.background = "green";
  }
  if (total5 ==3) {
     box2.style.background = "green";
     box5.style.background = "green";
     box8.style.background = "green";
  }
  if (total6 ==3) {
     box3.style.background = "green";
     box6.style.background = "green";
     box9.style.background = "green";
  }
  if (total7 ==3) {
     box1.style.background = "green";
     box5.style.background = "green";
     box9.style.background = "green";
  }
  if (total8 ==3) {
     box3.style.background = "green";
     box5.style.background = "green";
     box7.style.background = "green";
  }
  if ((total1 == 3) ||
  (total2 == 3) ||
  (total3 == 3) ||
  (total4 == 3) ||
  (total5 == 3) ||
  (total6 == 3) ||
  (total7 == 3) ||
  (total8 == 3))
  {
    playsection.style.pointerEvents = "none";
    setTimeout(function() {
    result_section.classList.add("active_result");
    playsection.style.display = "none";
    let p1text = p2.textContent;
    show_player.textContent = p1text;
    }, 800);
    }
  }
    
    
 // btn function
 quiet_btn.onclick = ()=>{
   location.href = "index.html";
 }
 agian_btn.onclick=()=>{
   window.location.reload();
   
 }
again_main.onclick =()=>{
   window.location.reload();
  
}
crose1.onclick =()=>{
  location.href = "index.html";
}




