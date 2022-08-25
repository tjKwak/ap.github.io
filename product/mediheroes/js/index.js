///////////////////////////////////////////////
//로그아웃 버튼 기능
$('.mybtn').click(function(){
    $('.myoption').toggleClass('active');
})

///////////////////////////////////////////////
//헤더 스크롤 css변환 기능
window.addEventListener('scroll', function(){
    if (window.pageYOffset === 0) {
        $('.app-header').removeClass('header-white')
    }
    if (window.pageYOffset > 10) {
        $('.app-header').addClass('header-white')
    }
    //홈페이지 애니메이션 기능
    if (window.pageYOffset > 400) {
        $('.img-human').addClass('animation')
    }
    if (window.pageYOffset > 1000) {
        $('.human-item-wrap .item').addClass('animation')
    }
});


///////////////////////////////////////////////
//내용 변환 기능
const url = '../images/';
var jsData = [
    {
        no : '1',
        title : '-',
        num : '-',
        img : `${url}1.svg`
    },
    {
        no : '2',
        title : 'Tuberculosis',
        num : '0 %',
        img : `${url}2.png`
    },
    {
        no : '3',
        title : 'Preumonia',
        num : '11.95 %',
        img : `${url}3.png`
    },
    {
        no : '4',
        title : 'Atelectasis',
        num : '0.68 %',
        img : `${url}4.png`
    },
    {
        no : '5',
        title : 'Effusion',
        num : '0.7 %',
        img : `${url}5.png`
    },
    {
        no : '6',
        title : 'Mass',
        num : '21.42 %',
        img : `${url}6.png`
    },
    {
        no : '7',
        title : 'Nodule',
        num : '21.42 %',
        img : `${url}7.png`
    },
    {
        no : '8',
        title : 'Preumothorax',
        num : '96.78 %',
        img : `${url}8.png`
    },
    {
        no : '9',
        title : 'Consolidation',
        num : '11.39 %',
        img : `${url}9.png`
    }
]
//import jsData from "./data.js";

var No = document.querySelector('#dataNo');
var Title = document.querySelector('#dataTitle');
var Num = document.querySelector('#dataNum');
var Img = document.querySelector('#dataImg img');
var info = document.querySelector('.info');
var currIndex = 0;

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