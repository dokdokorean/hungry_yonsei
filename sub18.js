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

let min = date.getMinutes()/60;

let hours=date.getHours()+min;
//평일
    document.getElementById('closed').style.visibility="hidden"
    document.getElementById('open').style.visibility='visible'
}
var exit =document.getElementById('exit');
    exit.addEventListener('click',function(event){
        window.close('sub1.html')
        alert('closeWebView')
    })
var logo =document.getElementById('logo');
    logo.addEventListener('click',function(event){
        window.close('sub1.html')
        alert('closeWebView')
    })
