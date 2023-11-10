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

if( day1 >0 && day1<5){
    if (hours>=8 && hours < 21){
        document.getElementById('close').style.visibility="hidden"
        document.getElementById('open').style.visibility='visible'

        document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-sb"
        document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-sb"

        document.getElementById('main2-2-1-1').style.color="#34C759"
        document.getElementById('main2-2-1-2').style.color="#34C759"

        document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-2-1').style.color="#4D4D4D"
        document.getElementById('main2-2-2-2').style.color="#4D4D4D"

        document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-3-1').style.color="#4D4D4D"
        document.getElementById('main2-2-3-2').style.color="#4D4D4D"
    }
    else{
        document.getElementById('close').style.visibility="visible"
        document.getElementById('open').style.visibility='hidden'

        document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-sb"
        document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-sb"

        document.getElementById('main2-2-1-1').style.color="#FF453A"
        document.getElementById('main2-2-1-2').style.color="#FF453A"

        document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-2-1').style.color="#4D4D4D"
        document.getElementById('main2-2-2-2').style.color="#4D4D4D"

        document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-3-1').style.color="#4D4D4D"
        document.getElementById('main2-2-3-2').style.color="#4D4D4D"
    }
}
else if(day1==5){
    if (8<=hours && hours <=20){
        document.getElementById('close').style.visibility="hidden"
        document.getElementById('open').style.visibility='visible'

        document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-1-1').style.color="#4D4D4D"
        document.getElementById('main2-2-1-2').style.color="#4D4D4D"

        document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-sb"
        document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-sb"

        document.getElementById('main2-2-2-1').style.color="#34C759"
        document.getElementById('main2-2-2-2').style.color="#34C759"

        document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-3-1').style.color="#4D4D4D"
        document.getElementById('main2-2-3-2').style.color="#4D4D4D"
        }
    else{
        document.getElementById('close').style.visibility="visible"
        document.getElementById('open').style.visibility='hidden'

        document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-1-1').style.color="#4D4D4D"
        document.getElementById('main2-2-1-2').style.color="#4D4D4D"

        document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-sb"
        document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-sb"

        document.getElementById('main2-2-2-1').style.color="#FF453A"
        document.getElementById('main2-2-2-2').style.color="#FF453A"

        document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-light"

        document.getElementById('main2-2-3-1').style.color="#4D4D4D"
        document.getElementById('main2-2-3-2').style.color="#4D4D4D"
    }
}
else if(day1==0 || day1==6){
    if (10.5<=hours && hours <=19){
    document.getElementById('close').style.visibility="hidden"
    document.getElementById('open').style.visibility='visible'

    document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-medium"
    document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-light"

    document.getElementById('main2-2-1-1').style.color="#4D4D4D"
    document.getElementById('main2-2-1-2').style.color="#4D4D4D"

    document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-medium"
    document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-light"

    document.getElementById('main2-2-2-1').style.color="#4D4D4D"
    document.getElementById('main2-2-2-2').style.color="#4D4D4D"

    document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-sb"
    document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-sb"

    document.getElementById('main2-2-3-1').style.color="#34C759"
    document.getElementById('main2-2-3-2').style.color="#34C759"
    }
else{
     document.getElementById('close').style.visibility="visible"
        document.getElementById('open').style.visibility='hidden'

        document.getElementById('main2-2-1-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-1-2').style.fontFamily="Pretendard-light"
    
        document.getElementById('main2-2-1-1').style.color="#4D4D4D"
        document.getElementById('main2-2-1-2').style.color="#4D4D4D"
    
        document.getElementById('main2-2-2-1').style.fontFamily="Pretendard-medium"
        document.getElementById('main2-2-2-2').style.fontFamily="Pretendard-light"
    
        document.getElementById('main2-2-2-1').style.color="#4D4D4D"
        document.getElementById('main2-2-2-2').style.color="#4D4D4D"
    
        document.getElementById('main2-2-3-1').style.fontFamily="Pretendard-sb"
        document.getElementById('main2-2-3-2').style.fontFamily="Pretendard-sb"
    
        document.getElementById('main2-2-3-1').style.color="#FF453A"
        document.getElementById('main2-2-3-2').style.color="#FF453A"
}
}
else{
    document.getElementById('closed').style.visibility="visible"
    document.getElementById('open').style.visibility='hidden'
}
}
var exit =document.getElementById('exit');
    exit.addEventListener('click',function(event){
        window.close('sub1.html')
        alert('closeWebView')
    })
