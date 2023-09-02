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

if( day1 >= 0 && day1<6 && hours>=10.5 && hours <14){
    document.getElementById('closed').style.visibility="hidden"
    document.getElementById('open').style.visibility='visible'
    document.getElementById('lunch').style.visibility='hidden'
}
else if( day1 >= 0 && day1<6 && hours>14 && hours <15){
    document.getElementById('closed').style.visibility="hidden"
    document.getElementById('open').style.visibility='hidden'
    document.getElementById('lunch').style.visibility='visible'
}
else if( day1 >= 0 && day1<6 && hours>=15 && hours <18){
    document.getElementById('closed').style.visibility="hidden"
    document.getElementById('open').style.visibility='visible'
    document.getElementById('lunch').style.visibility='hidden'
}
//일요일
else{
    document.getElementById('closed').style.visibility="visible"
    document.getElementById('open').style.visibility='hidden'
    document.getElementById('lunch').style.visibility='hidden'


}
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
