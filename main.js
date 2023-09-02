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
function sub2(){
  window.open('sub2.html');
}
function sub3(){
  window.open('sub3.html');
}
function sub4(){
  window.open('sub4.html');
}
function sub5(){
  window.open('sub5.html');
}
function sub6(){
  window.open('sub6.html');
}
function sub7(){
  window.open('sub7.html');
}
function sub8(){
  window.open('sub8.html');
}
function sub9(){
  window.open('sub9.html');
}
function sub10(){
  window.open('sub10.html');
}
function sub11(){
  window.open('sub11.html');
}
function sub12(){
  window.open('sub12.html');
}
function sub13(){
  window.open('sub13.html');
}
function sub14(){
  window.open('sub14.html');
}
function sub15(){
  window.open('sub15.html');
}
function sub16(){
  window.open('sub16.html');
}
function sub161(){
  window.open('sub161.html');
}
function sub17(){
  window.open('sub17.html');
}
function sub18(){
  window.open('sub18.html');
}
function sub19(){
  window.open('sub19.html');
}
function sub20(){
  window.open('sub20.html');
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
function info10(){
    document.getElementById('info_info').style.visibility='visible'
        setTimeout(() => document.getElementById('info_info').style.visibility='hidden', 9000);
}
var info = document.getElementById('info1');
    info.addEventListener('click', function (event){
        info10()
    });
function china_func(){
            document.getElementById('china').style.color='#fff'
        document.getElementById('section1').style.visibility='visible'
        document.getElementById('section2').style.visibility='hidden'
        document.getElementById('noon').style.color='#616161'
        const chinaMenus = document.getElementsByClassName('china-menu');
            for (let i = 0; i < chinaMenus.length; i++) {
            chinaMenus[i].style.visibility = 'visible';
            }
        const lunchMenus = document.getElementsByClassName('lunch-menu');
            for (let i = 0; i < lunchMenus.length; i++) {
            lunchMenus[i].style.visibility = 'hidden';
            }}
function noon_func(){
    document.getElementById('noon').style.color='#fff'
        document.getElementById('section2').style.visibility='visible'
        document.getElementById('section1').style.visibility='hidden'
        document.getElementById('china').style.color='#616161'
        const chinaMenus = document.getElementsByClassName('china-menu');
            for (let i = 0; i < chinaMenus.length; i++) {
            chinaMenus[i].style.visibility = 'hidden';
            }
        const lunchMenus = document.getElementsByClassName('lunch-menu');
            for (let i = 0; i < lunchMenus.length; i++) {
            lunchMenus[i].style.visibility = 'visible';
            }
        }


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
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='block'
       } else if (day1 === 1) {
       day10 = '( 월 )';
       document.getElementById('mon').style.display='block'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='none'
       } else if (day1 === 2) {
       day10 = '( 화 )';
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='block'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='none'
       } else if (day1 === 3) {
       day10 = '( 수 )';
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='block'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='none'
     } else if (day1 === 4) {
       day10 = '( 목 )';
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='block'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='none'
     } else if (day1 === 5) {
       day10 = '( 금 )';
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='block'
       document.getElementById('sat').style.display='none'
       document.getElementById('sun').style.display='none'
     } else if (day1 === 6) {
       day10 = '( 토 )';
       document.getElementById('mon').style.display='none'
       document.getElementById('tue').style.display='none'
       document.getElementById('wend').style.display='none'
       document.getElementById('thur').style.display='none'
       document.getElementById('fri').style.display='none'
       document.getElementById('sat').style.display='block'
       document.getElementById('sun').style.display='none'
     }
     document.getElementById('year').innerText = year + '.' + (month + 1) + '.' + day + '.' + day10;
   }
   
   var tomorrow1 = document.getElementById('tomar');
   tomorrow1.addEventListener('click', function (event) {
     if (currentDate.getDay() === 6) { // 토요일인 경우
       currentDate.setDate(currentDate.getDate() - 6); // 6일을 빼서 이번 주 일요일로 이동
     } else {
       currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 설정
     }
     updateDisplay();
   });
   
   
   var yesterday1 = document.getElementById('yesar');
   yesterday1.addEventListener('click', function (event) {
     if (currentDate.getDay() === 0) { // 일요일인 경우
       currentDate.setDate(currentDate.getDate() + 6); // 6일을 더해서 이전 주 토요일로 이동
     } else {
       currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
     }
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
if (day1 === 0) {
    day10 = '( 일 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='block'

  } else if (day1 === 1) {
    day10 = '( 월 )';
    document.getElementById('mon').style.display='block'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='none'
    } else if (day1 === 2) {
    day10 = '( 화 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='block'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='none'
    } else if (day1 === 3) {
    day10 = '( 수 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='block'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='none'
    } else if (day1 === 4) {
    day10 = '( 목 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='block'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='none'
    } else if (day1 === 5) {
    day10 = '( 금 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='block'
    document.getElementById('sat').style.display='none'
    document.getElementById('sun').style.display='none'
    } else if (day1 === 6) {
    day10 = '( 토 )';
    document.getElementById('mon').style.display='none'
    document.getElementById('tue').style.display='none'
    document.getElementById('wend').style.display='none'
    document.getElementById('thur').style.display='none'
    document.getElementById('fri').style.display='none'
    document.getElementById('sat').style.display='block'
    document.getElementById('sun').style.display='none'  }

document.getElementById("year").innerText=year+'.'+(month+1)+'.'+day+'.'+day10
//현재 시간 표시(사용자 접근성 향상)
let hours=date.getHours();
if (hours<9){
    china_func()
}
else{
    noon_func()
}

if (day1>0 && day1 <6 && hours>8 && hours <20){
    document.getElementById('blue').style.visibility='visible'
    document.getElementById('red').style.visibility='hidden'
}
else{
    document.getElementById('red').style.visibility='visible'
    document.getElementById('blue').style.visibility='hidden'
}
info10()
}
