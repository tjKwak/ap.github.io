///////////////////////////////////////////////
//로그아웃 버튼 기능
$('.mybtn').click(function(){
    $('.myoption').toggleClass('active');
})



///////////////////////////////////////////////
//내용 변환 기능
var No = document.querySelector('#dataNo');
var Title = document.querySelector('#dataTitle');
var Num = document.querySelector('#dataNum');
var Img = document.querySelector('#dataImg img');
var info = document.querySelector('.info');
var currIndex = 0;

import jsData from "./data.js";

function changeData(index){
    const DATA_LEN = jsData.length;
    let nextIndex = currIndex + index;
    //끝까지 갔다면
    if (nextIndex === DATA_LEN) {
        nextIndex = 0;
    }
    //처음에서 뒤로 갔다면
    // if(currIndex === 0 && index === -1){}
    if (nextIndex === -1) {
        nextIndex = DATA_LEN - 1;
    }
    //처음이 아니라면
    if (nextIndex !== 0) {
        info.classList.remove('d-none')
    }
    //처음이라면
    if (nextIndex === 0) {
        info.classList.add('d-none')
    }
    const {no, title, num, img} = jsData[nextIndex];

    No.innerHTML = no;
    Title.innerHTML = title;
    Num.innerHTML = num;
    Img.src = img;
    currIndex = nextIndex;
}

$('.btn-prev').click(function(){
    changeData(-1);
})

$('.btn-next').click(function(){
    changeData(1);
})