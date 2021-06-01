
//  all selector
const crose1 = document.querySelector('.crose1');
const allBox = document.querySelectorAll("section span");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const again_btn = document.querySelector(".again_btn");
const com_click = document.querySelector(".com_click");
const won_sound1 = document.querySelector(".won_sound1");
const slider = document.querySelector(".slider");
const result_area = document.querySelector(".result_area");
const result_img = document.querySelector(".result_img");
const win_text = document.querySelector(".win_text");
const again = document.querySelector(".again");
const quiet = document.querySelector(".quiet");
const playArea = document.querySelector(".play-area");

//  inserting icon
let p1Value = `<h3 class="o_btn" >o</h3>`;
let p2Value = `<h3>&times;</h3>`;

// a global value
let runBot = true;
// for score
let t1 = 0;let t2 = 0;let t3 = 0;let t4 = 0;let t5 = 0;let t6 = 0;let t7 = 0;let t8 = 0;let t9 = 0;let m1 = 0;let m2 = 0;let m3 = 0;let m4 = 0;let m5 = 0;let m6 = 0;let m7 = 0;let m8 = 0;let m9 = 0;

// all box click function
box1.onclick =()=>{
  rightSide();
  box1.innerHTML = p1Value ;
  t1++;
  box1.style.pointerEvents = "none";
  let_fun();
  tot();
};

box2.onclick =()=>{
  rightSide();
  box2.innerHTML = p1Value ;
  t2++;
  box2.style.pointerEvents = "none";
  let_fun();
  tot();
};

box3.onclick =()=>{
  rightSide();
  box3.innerHTML = p1Value ;
  box3.style.pointerEvents = "none";
  t3++;
  let_fun();
  tot();
};

box4.onclick =()=>{
  rightSide();
  box4.innerHTML = p1Value ;
  box4.style.pointerEvents = "none";
  t4++;
  let_fun();
  tot();
};

box5.onclick =()=>{
  rightSide();
  box5.innerHTML = p1Value ;
  box5.style.pointerEvents = "none";
  t5++;
  let_fun();
  tot();
};

box6.onclick =()=>{
  rightSide();
  box6.innerHTML = p1Value ;
  box6.style.pointerEvents = "none";
  t6++;
  let_fun();
  tot();
};

box7.onclick =()=>{
  rightSide();
  box7.innerHTML = p1Value ;
  box7.style.pointerEvents = "none";
  t7++;
  let_fun();
  tot();
};

box8.onclick =()=>{
  rightSide();
  box8.innerHTML = p1Value ;
  t8++;
  let_fun();
  box8.style.pointerEvents = "none";
  tot();
};

box9.onclick =()=>{
  rightSide();
  box9.innerHTML = p1Value ;
  box9.style.pointerEvents = "none";
  t9++;
  let_fun();
  tot();
};
// slider
function rightSide() {
   slider.style.left = "50%";
 slider.style.width = "145px";
}


// computer option
function tot(){
 setTimeout(function() {
 slider.style.left = "0";
 slider.style.width = "70px";
 let array = [];
     if(runBot){ 
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){ 
                array.push(i); 
            }
        }
 let randomBox = array[Math.floor(Math.random() * array.length )];
allBox[randomBox].innerHTML= p2Value;
allBox[randomBox].style.pointerEvents= "none";
if (randomBox == 0) {
  m1++;
}
if (randomBox == 1) {
  m2++;
}
if (randomBox == 2) {
  m3++;
}
if (randomBox == 3) {
  m4++;
}
if (randomBox == 4) {
  m5++;
}
if (randomBox == 5) {
  m6++;
}
if (randomBox == 6) {
  m7++;
}
if (randomBox == 7) {
  m8++;
}
if (randomBox == 8) {
  m9++;
}
// calling score function
let_fun2(); 
       
}}, 1000);}

// player score function
function let_fun(){
  let total1= (t1 + t2 + t3);
  let total2= (t4 + t5 + t6);
  let total3= (t7 + t8 + t9);
  let total4= (t1 + t4 + t7);
  let total5= (t2 + t5 + t8);
  let total6= (t3 + t6 + t9);
  let total7= (t1 + t5 + t9);
  let total8= (t3 + t5 + t7);
  // match
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
   playArea.style.pointerEvents = "none";
   win_text.textContent = "You Win";
   result_img.src = "win.png";
   setTimeout(function() {
   playArea.style.display = "none";
   result_area.style.display = "block";
    }, 800)}}

// computer score function
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
  playArea.style.pointerEvents = "none";
  win_text.textContent = "You lose";
  result_img.src = "sorry.png";
  setTimeout(function() {
  playArea.style.display = "none";
  result_area.style.display = "block";
  }, 800);}}

// other onclick button
again.onclick=()=>{
  window.location.reload();
}
again_btn.onclick=()=>{
  window.location.reload();
}
quiet.onclick=()=>{
  location.href = "index.html";
}
crose1.onclick =()=>{
  location.href = "index.html";
}