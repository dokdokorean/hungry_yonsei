var good = document.getElementById('good');
    good.addEventListener('click', function(event){
        document.getElementById('like1').style.visibility='hidden'
        document.getElementById('like2').style.visibility='hidden'
        document.getElementById('good').style.visibility='hidden'
        document.getElementById('stick2').style.visibility='hidden'
        document.getElementById('bad').style.visibility='hidden'
        document.getElementById('afterlike').style.visibility='visible'
    });
var bad = document.getElementById('bad');
    bad.addEventListener('click', function(event){
        document.getElementById('like1').style.visibility='hidden'
        document.getElementById('like2').style.visibility='hidden'
        document.getElementById('good').style.visibility='hidden'
        document.getElementById('stick2').style.visibility='hidden'
        document.getElementById('bad').style.visibility='hidden'
        document.getElementById('afterlike').style.visibility='visible'
    });
    //list open animation
let keyframes1 = [
        {opacity: 0},
        {opacity: 1, transform: "translate(-250px, 0)"}
      ];
let options1 = {
            duration: 600,
            fill: "forwards"
      };
var list1 =document.getElementById('menu');
    list1.addEventListener('click',function(event){
        document.getElementById('list').style.display='block';
        document.getElementById('list').animate(keyframes1, options1);
        setTimeout(()=>{},600);
    })

      //list exit button
      let keyframes2 = [
        {opacity: 1},
        {opacity: 0, transform: "translate(0px, 0)"}
      ];
let options2 = {
            duration: 600,
            fill: "forwards"
      };
var list2 =document.getElementById('exit');
    list2.addEventListener('click',function(event){
        document.getElementById('list').animate(keyframes2, options2);
        setTimeout(() => document.getElementById('list').style.display='none', 600);
    })
function sub1(){
    window.open('sub1.html');
}

var china = document.getElementById('china');
    china.addEventListener('click', function morning0(event){
        china_func()
    }
    );
var noon1 = document.getElementById('noon');
    noon1.addEventListener('click', function noon0(event){
        noon_func()
    });

var info = document.getElementById('info1');
    info.addEventListener('click', function (event){
        document.getElementById('info_info').style.visibility='visible'
        setTimeout(() => document.getElementById('info_info').style.visibility='hidden', 3300);
    });
function china_func(){
            document.getElementById('china').style.color='#fff'
        document.getElementById('section1').style.visibility='visible'
        document.getElementById('section2').style.visibility='hidden'
        document.getElementById('noon').style.color='#616161'
        document.getElementById('china-menu').style.visibility='visible'
        document.getElementById('lunch-menu').style.visibility='hidden'
}
function noon_func(){
    document.getElementById('noon').style.color='#fff'
        document.getElementById('section2').style.visibility='visible'
        document.getElementById('section1').style.visibility='hidden'
        document.getElementById('china').style.color='#616161'
        document.getElementById('china-menu').style.visibility='hidden'
        document.getElementById('lunch-menu').style.visibility='visible'
}
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);

   var currentDate = new Date();

   function updateDisplay() {
     // 현재 년도 표시
     var year = currentDate.getFullYear();
     // 현재 달 표시
     var month = currentDate.getMonth();
     // 현재 날짜 표시
     var day = currentDate.getDate();
     // 현재 요일 표시
     var day1 = currentDate.getDay();
   
     var day10;
     if (day1 === 0) {
       day10 = '( 일 )';
     } else if (day1 === 1) {
       day10 = '( 월 )';
     } else if (day1 === 2) {
       day10 = '( 화 )';
     } else if (day1 === 3) {
       day10 = '( 수 )';
     } else if (day1 === 4) {
       day10 = '( 목 )';
     } else if (day1 === 5) {
       day10 = '( 금 )';
     } else if (day1 === 6) {
       day10 = '( 토 )';
     }
     document.getElementById('year').innerText = year + '.' + (month + 1) + '.' + day + '.' + day10;
   }
   
   var tomorrow1 = document.getElementById('tomar');
   tomorrow1.addEventListener('click', function (event) {
     currentDate.setDate(currentDate.getDate() + 1); // 현재 날짜에 1일을 더하여 다음 날짜로 설정
     updateDisplay();
   });
   
   var yesterday1 = document.getElementById('yesar');
   yesterday1.addEventListener('click', function (event) {
     currentDate.setDate(currentDate.getDate() - 1); // 현재 날짜에 1일을 빼서 이전 날짜로 설정
     updateDisplay();
   });
   
   // 초기화면 설정
   updateDisplay();
   

window.onload = function main(){
    //현재 년도 표시
let date = new Date();
var year = date.getFullYear()
//현재 달 표시
var month = date.getMonth()
//현재 날짜 표시
var day = date.getDate()
//현재 요일 표시

var day1 = date.getDay()
if (day1==0){
    var day10 = '( 일 )'}
else if(day1==1){
    var day10 = '( 월 )'}
else if(day1==2){
    var day10 = '( 화 )'}
else if(day1==3){
    var day10 = '( 수 )'}
else if(day1==4){
    var day10 = '( 목 )'}
else if(day1==5){
    var day10 = '( 금 )'}
else if(day1==6){
    var day10 = '( 토 )'}

document.getElementById("year").innerText=year+'.'+(month+1)+'.'+day+'.'+day10
//현재 시간 표시(사용자 접근성 향상)
let hours=date.getHours();
if (hours<9){
    china_func()
}
else{
    noon_func()
}

if (day1<0 && hours>8 && hours <20){
    document.getElementById('blue').style.visibility='visible'
    document.getElementById('red').style.visibility='hidden'
}
else{
    document.getElementById('red').style.visibility='visible'
    document.getElementById('blue').style.visibility='hidden'
}
}
