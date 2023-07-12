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
        console.log('1')
    });
var morning1 = document.getElementById('morning');
    morning1.addEventListener('click', function morning0(event){
        morning_func()
    }
    );
var noon1 = document.getElementById('noon');
    noon1.addEventListener('click', function noon0(event){
        noon_func()
    });

var info = document.getElementById('info1');
    info.addEventListener('click', function (event){
        document.getElementById('info_info').style.visibility='visible'
        setTimeout(() => document.getElementById('info_info').style.visibility='hidden', 3000);
    });
function morning_func(){
            document.getElementById('morning').style.color='#fff'
        document.getElementById('section1').style.visibility='visible'
        document.getElementById('section2').style.visibility='hidden'
        document.getElementById('noon').style.color='#616161'
        document.getElementById('morning-menu').style.visibility='visible'
        document.getElementById('lunch-menu').style.visibility='hidden'

}
function noon_func(){
    document.getElementById('noon').style.color='#fff'
        document.getElementById('section2').style.visibility='visible'
        document.getElementById('section1').style.visibility='hidden'
        document.getElementById('morning').style.color='#616161'
        document.getElementById('morning-menu').style.visibility='hidden'
        document.getElementById('lunch-menu').style.visibility='visible'
}
window.onload = function main(){
    //현재 년도 표시
let date = new Date();
var year = date.getFullYear()
document.getElementById("year").innerText=year
//현재 달 표시
var month = date.getMonth()
document.getElementById("month").innerText=month+1
//현재 날짜 표시
var day = date.getDate()
document.getElementById("date").innerText=day
//현재 요일 표시
var day1 = date.getDay()
if (day1==0){
    document.getElementById("day").innerText='( 일 )'
}
else if(day1==1){
    document.getElementById("day").innerText='( 월 )'
}
else if(day1==2){
    document.getElementById("day").innerText='( 화 )'
}
else if(day1==3){
    document.getElementById("day").innerText='( 수 )'
}
else if(day1==4){
    document.getElementById("day").innerText='( 목 )'
}
else if(day1==5){
    document.getElementById("day").innerText='( 금 )'
}
else if(day1==6){
    document.getElementById("day").innerText='( 토 )'
}
//현재 시간 표시(사용자 접근성 향상)
let hours=date.getHours();
if (hours<9){
    morning_func()
}
else{
    noon_func()
}

if (hours>15){
    document.getElementById('info1').style.visibility='visible'
}
else{
    document.getElementById('info1').style.visibility='hidden'
}

// 여기서부터 수정

if(localStorage.getItem('mor-menu1')){
var mor_menu1 = localStorage.getItem('mor-menu1')}
    document.getElementById('mor-menu10').innerText=mor_menu1

if(localStorage.getItem('mor-menu2')){
var mor_menu2 = localStorage.getItem('mor-menu2')}
    document.getElementById('mor-menu20').innerText=mor_menu2

if(localStorage.getItem('mor-menu3')){
    var mor_menu3 = localStorage.getItem('mor-menu3')}
    document.getElementById('mor-menu30').innerText=mor_menu3

if(localStorage.getItem('mor-menu4')){
var mor_menu4 = localStorage.getItem('mor-menu4')}
    document.getElementById('mor-menu40').innerText=mor_menu4

if(localStorage.getItem('mor-menu5')){
    var mor_menu5 = localStorage.getItem('mor-menu5')}
    document.getElementById('mor-menu50').innerText=mor_menu5

if(localStorage.getItem('mor-menu6')){
var mor_menu6 = localStorage.getItem('mor-menu6')}
document.getElementById('mor-menu60').innerText=mor_menu6

if(localStorage.getItem('mor-menu7')){
    var mor_menu7 = localStorage.getItem('mor-menu7')}
    document.getElementById('mor-menu70').innerText=mor_menu7
    

if(localStorage.getItem('lun-menu1')){
    var lun_menu1 = localStorage.getItem('lun-menu1')}
    document.getElementById('lun-menu10').innerText=lun_menu1

if(localStorage.getItem('lun-menu2')){
    var lun_menu2 = localStorage.getItem('lun-menu2')}
    document.getElementById('lun-menu20').innerText=lun_menu2

if(localStorage.getItem('lun-menu3')){
    var lun_menu3 = localStorage.getItem('lun-menu3')}
    document.getElementById('lun-menu30').innerText=lun_menu3

if(localStorage.getItem('lun-menu4')){
    var lun_menu4 = localStorage.getItem('lun-menu4')}
    document.getElementById('lun-menu40').innerText=lun_menu4

if(localStorage.getItem('lun-menu5')){
    var lun_menu5 = localStorage.getItem('lun-menu5')}
    document.getElementById('lun-menu50').innerText=lun_menu5

if(localStorage.getItem('lun-menu6')){
    var lun_menu6 = localStorage.getItem('lun-menu6')}
    document.getElementById('lun-menu60').innerText=lun_menu6
}
